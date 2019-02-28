denkgeleSayı = ()=> (Math.round(Math.random()*1e8)%10000000)+10

document.addEventListener("DOMContentLoaded",()=>{
    let zamanlar = document.querySelectorAll(".zamanlar")
    let sonuçlar = document.querySelectorAll(".sonuçlar")
    let sayıAlanı = document.querySelectorAll(".sayılar")[0]
    let hesapla = document.querySelectorAll("#hesapla")[0]
	let denkgele = document.querySelectorAll("#denkgele")[0]
	
    hesapla.onclick=()=>{
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
	sayıAlanı.value=''
	denkgele.onclick=()=>{
		sayıAlanı.value='';
       for(let i = 0 ; i<10; i++){
		   sayıAlanı.value+= denkgeleSayı()+" "+ denkgeleSayı()+"\n"
	   }
    }
})