/*
        http://openapi.seoul.go.kr:8088/(인증키)/xml/TbPublicWifiInfo_GN/1/5/
        좌표값 ,실제 주소
        */
function getFetch() {
            fetch("http://openapi.seoul.go.kr:8088/4f4975567873657534395075496a44/json/bikeList/1/10/")
                .then(function(response) {
                    if(response.status !=200 ){
                        alert("네트워크상 오류가 발생했습니다. 다시 시도하세요");
                        return;
                    } else {
                        return response.json();
                    }
                })
                .then(function(data){
                    var list = data["rentBikeStatus"]["row"];
                    //console.log(list);
                    for(var i=0;i<list.length;i++){
                        position = {
                            title: 'list'+i, 
                            latlng: new kakao.maps.LatLng(list[i].stationLatitude, list[i].stationLongitude)
                        }
                    
                        addMarker(position);

                    }
                })
}
(function(){
            getFetch();
            
})();
