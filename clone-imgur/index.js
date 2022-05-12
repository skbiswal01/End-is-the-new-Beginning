async function callapi(){
    try {
     var res = await fetch("https://api.unsplash.com/photos/?client_id=OfQkpCzA5zbCMUGH07eu9Ya0lIirTb48zHT5MdbHmcM");
     var data = await res.json();
     return data;
    } catch (error) {
        console.log(error)
    }
 }
 async function callapi2(){
    try {
     var res = await fetch("https://picsum.photos/v2/list");
     var data = await res.json();
     return data;
    } catch (error) {
        console.log(error)
    }
 }
 function appendData(data,parent){
     data.map((obj)=>{
         var div = document.createElement("div");
         div.className="image";
         var img = document.createElement("img");
         img.src = obj.urls.regular;
         img.className = "showimg"
 
         div.append(img);
         parent.append(div);
 
     });
 
 }
 function appendData2(data,parent){
    data.map((obj)=>{
        var div = document.createElement("div");
        div.className="image";
        var img = document.createElement("img");
        img.src = obj.download_url;
        img.className = "showimg"

        div.append(img);
        parent.append(div);

    });

}
 export {callapi2, callapi,appendData,appendData2 };