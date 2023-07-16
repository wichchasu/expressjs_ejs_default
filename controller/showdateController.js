const formatDate = require('../helpers/formatDate');
const index =(req,res) => {
          const today = new Date();
          const formattedDate = formatDate(today);
          res.render('pages/showdate',{title:'showdate in controller',strdate:formattedDate})
}

module.exports={index}