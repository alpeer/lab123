denkgeleSayı = ()=> (Math.round(Math.random()*1e8)%10000000)+10
timeout=false;
document.addEventListener("DOMContentLoaded",()=>{
    let zamanlar = document.querySelectorAll(".zamanlar")
    let sonuçlar = document.querySelectorAll(".sonuçlar")
    let sayıAlanı = document.querySelectorAll(".sayılar")[0]
    let hesapla = document.querySelectorAll("#hesapla")[0]
	let denkgele = document.querySelectorAll("#denkgele")[0]
	
    hesapla.onclick=()=>{
        if(sayıAlanı.value.trim().split('\n').length){
        zamanlar[0].innerHTML=''
        zamanlar[1].innerHTML=''
        sonuçlar[0].innerHTML=''
        sonuçlar[1].innerHTML=''
        z=[[],[]];
        ['ebob', 'öklid'].forEach((izlence, j)=>{
            sayıAlanı.value.trim().split('\n').forEach((sayılar,i)=>{
                sayıdizisi=sayılar.split(' ')
                r=Çalışma.çöz(sayıdizisi.map(Number),izlence)
                z[j].push(r[0])
                zamanlar[j].innerHTML += ('#'+(i+1)).padEnd(5,'.')+': '+r[0]+'ms<br>'
                sonuçlar[j].innerHTML += ('#'+(i+1)).padEnd(5,'.')+': '+r[1]+'<br>'
            })
            ort=z[j].reduce((k, l)=>k+l)/z[j].length
            zamanlar[j].innerHTML+='<br><br>ortalama: '+ort
        })
        }
    }
	sayıAlanı.value=''
	denkgele.onwheel =function(e){
	    if(timeout){clearTimeout(timeout)}
	    e.preventDefault();
	    e.stopPropagation();
    	sayı = Number((this.innerHTML).split(" ")[0])
    	sayı+= e.deltaY>0? -1: +1
    	sayı = sayı<1?1:sayı
    	this.innerHTML= sayı +" Denkgele Sayı"
    	this.onclick()
    	timeout=setTimeout(()=>hesapla.onclick(),10)
    }
	denkgele.onclick=function(e){
		sayıAlanı.value='';
       for(let i = 0 ; i<Number((this.innerHTML).split(" ")[0]); i++){
		   sayıAlanı.value+= denkgeleSayı()+" "+ denkgeleSayı()+"\n"
	   }
    }
})