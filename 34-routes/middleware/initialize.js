module.exports.userList = function userList(req, res, next) {

    console.log('initializing the data');
    if(req.session && req.session.users){
        //do nothing
    }else{
        var users = [{
              id:1,
              name:"Deepa",
              password:"1234"
            },{
              id:2,
              name:"Divyanshi",
              password:"1234"
            },{
              id:3,
              name:"Koustav",
              password:"1234"
            },{
              id:4,
              name:"Akshay",
              password:"1234"
            },{
              id:5,
              name:"Manohar",
              password:"1234"
            }];
        req.session.users = users;
    }

    next();
};