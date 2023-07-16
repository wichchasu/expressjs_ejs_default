// helpers/formatDate.js

const formatDate = (date) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return date.toLocaleDateString('th-TH', options);
        };
        
        module.exports = formatDate;
        