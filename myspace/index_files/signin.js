/* account */(function(){function b(){a=setTimeout(function(){comm.send("dialog.isOpen",function(a){a===0&&comm.send("location.href","/")})},0)}var a=null;comm.listen("dialog.hiding",b),comm.listen("spaceway.page.loading",function(){clearTimeout(a),comm.stopListening("dialog.hiding",b)}),comm.send("login.show",{context:{action:"signInPage"}})})();
