// const express = require('express');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// });

// const uploadMiddleware = upload.fields([
//   { name: 'avatar', maxCount: 1 },
//   { name: 'gallery', maxCount: 8 },
// ]);
// app.post('/cool-profile', uploadMiddleware, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// });



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });





// Requiring express to handle routing
const express = require("express");
const basicAuth = require("express-basic-auth");
const fileUpload = require("express-fileupload");
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const payload = { sub: '12345', role: 'user' };
dotenv.config();
const secret = process.env.JWT_SECRET;
// const token = jwt.sign(payload, secret, {
//   expiresIn: '15m'
// });
// console.log('Access Token:', token);

var fsa = require('fs/promises');
var fs = require('fs');
var path = require('path');
const users =  JSON.parse(fs.readFileSync('users.json', 'utf8'));
console.log(users);


const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(
//     basicAuth({
//         users: { username: "password" },
//         challenge: true,
//         unauthorizedResponse:
//             "Unauthorized access. Please provide valid credentials.",
//     })
// );


// Passing fileUpload as a middleware
app.use(fileUpload());
app.use(express.static('static'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'portal'));

// For handling the upload request
app.post("/upload", function (req, res) {

  // When a file has been uploaded
  if (req.files && Object.keys(req.files).length !== 0) {
  
    // Uploaded path
    const uploadedFile = req.files.uploadFile;

    // Logging uploading file
    console.log(uploadedFile);

    // Upload path
    const uploadPath = __dirname
        + "/uploads/" + uploadedFile.name;

    // To save the file using mv() function
    uploadedFile.mv(uploadPath, function (err) {
      if (err) {
        console.log(err);
        res.send("Failed !!");
      } else res.send("Successfully Uploaded !!");
    });
  } else res.send("No file uploaded !!");
});

// To handle the download file request
app.get("/download", function (req, res) {

  // The res.download() talking file path to be downloaded
  res.download(__dirname + "/download_gfg.txt", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

// GET request to the root of the app
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/static/8.html");
});


app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/static/login.html");
});

app.post("/login", function (req, res) {
 const { username, password } = req.body;
 console.log(`Received login request for username: ${username} with pass ${password}`);
  for (const u of users) {
    if (u.username === username && u.password === password) {
      const token = jwt.sign({ username: u.username, cid: u.cid }, process.env.JWT_SECRET, { expiresIn: '90d' });
      console.log("signed: "+ token);
      return res.json({ token });
    }
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});







app.get("/portal", verifyToken,  renderClientPortal);

app.use("/client_media",verifyToken);
app.use("/client_media", express.static( path.join(__dirname, 'portal/inspection_media')));
//http://192.168.1.133:3000/client_media/cid_1/s1_1_1.png




function verifyToken(req, res, next) {
  var token = req.header('Authorization');
  console.log("cookies " + JSON.stringify(req.cookies));
  var cookie = req.cookies['token'];
  if (cookie) {
    token = cookie;
  } else {
    if (token && token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    } else {
      res.redirect('../../login/');
      return
    }
  }


  if (!token) {
    return       res.redirect('../../login/');
      
    //res.status(401).json({ message: 'Access Denied' });
}
  try {
    // Verify the token
    console.log("token " + token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified " + JSON.stringify(verified));
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    return       res.redirect('../../login/');
    //res.status(400).json({ message: 'Invalid Token' });
  }
};






async function renderClientPortal(req, res, next) {
  // res.json({ message: `Welcome to the dashboard, ${req.user.username}!` });
  console.log("cid " + req.user.cid);
  console.log(__dirname);
  var dir = __dirname + "/portal/inspection_media/" + req.user.cid;
  var thumb_dir = __dirname + "/portal/inspection_media/" + req.user.cid + "/thumbs";

  var dir_stat = await fsa.stat(dir);
  var thumb_dir_stat = await fsa.stat(thumb_dir);

  if (!dir_stat.isDirectory) {
    console.log(`The file or directory at '${dir}' does not exist.`);
    res.status(400).json({ message: 'Invalid Client ID' });
    return;
  }

  if (!thumb_dir_stat.isDirectory) {
    console.log(`The file or directory at '${thumb_dir}' does not exist.`);
    res.status(400).json({ message: 'Invalid Thumb dir' });
    return;
  }
  var imgs = {
    "1":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "2":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "3":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "4":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "5":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "6":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "7":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "8":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "9":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "10":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "11":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "12":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "13":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
};
  var thumbs = {
    "1":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "2":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "3":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "4":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "5":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "6":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "7":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "8":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "9":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "10":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "11":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "12":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "13":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
};
   var des = {
    "1":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "2":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "3":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "4":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "5":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "6":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "7":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "8":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "9":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "10":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "11":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "12":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
    "13":{"1":[], "2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[]},
};
  var files = await fsa.readdir(dir);
  console.log(files);

  for (const file of files)
 {
    var file_path = path.join(dir, file);
    console.log("checking " + file_path);
    var file_stat = await fsa.stat(file_path);
    var thumb_path = path.join(thumb_dir, file);
    var thumb_stat = await fsa.stat(file_path);
    if (file_stat.isFile() && thumb_stat.isFile()) {
      //console.log("pushing " + file_path);
      // imgs.push(file_path);
      // thumbs.push(thumb_path);
      var [cat, subcat, num] = file.slice(1).split("_");
      if (cat in imgs) { } else {
        imgs[cat] = {};
        thumbs[cat] = {};
         des[cat] = {};
      }

      if (subcat in imgs[cat]) { } else {
        imgs[cat][subcat] = [];
         thumbs[cat][subcat] = [];
         des[cat][subcat] = [];
      }


      imgs[cat][subcat].push("cid_1/" + file);
      thumbs[cat][subcat].push("cid_1/thumbs/" + file);
      des[cat][subcat].push ( file);
    } else {
      console.error("skipping" + file_path);
    }
  }
  console.log(imgs);


  const myObj = {
  imgs:imgs,
  thumbs:thumbs,
  des:des,
  thumbnailHeight:100,
  thumbnailWidth:100,
  thumbnailAlignment:"left"
};

  res.render('portal', myObj);
  //res.sendFile(__dirname + "/portal/portal.html");

};




// Makes app listen to port 3000
app.listen(3000, function (req, res) {
  console.log("Started listening to port 3000");
});




