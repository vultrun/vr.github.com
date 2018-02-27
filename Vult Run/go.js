//получение элементов DOM
function t(x){
	if(x[0] === '#'){
		x = x.split('#');
		x.shift();
		var r = document.getElementById(x.join());
		r.s = r.style;
		return r;

	} else if(x[0] === '.'){
		x = x.split('.');
		x.shift();
		var r = document.getElementsByClassName(x.join());
		for(let i = 0; i < r.length; i++){
			r[i].s = r[i].style;
		}
		return r;

	} else {
		var r = document.getElementsByTagName(x);
		for(let i = 0; i < r.length; i++){
			r[i].s = r[i].style;
		}
		return r;
	}
}

t('#logo_text').onclick = function(){
	t('#logo_text').style.display = 'none';
	t('#logo_logo').style.display = 'block';
}
t('#logo_logo').onclick = function(){
	t('#logo_logo').style.display = 'none';
	t('#logo_text').style.display = '';
}



t('.menus')[0].style.borderBottom = '2px solid';
t('.menus')[0].style.opacity = '1';
t('#change').style.opacity = '0';
window.onload = function() {
	t('#change').style.opacity = '1';
    animo(t('#change'));
	t('#people').style.opacity = '0';
	setTimeout(function() {
		t('#people').style.opacity = '1';
		animo(t('#people'));
	}, 300);
  };






function clear_but(){
	for(let i = 0; i < 3; i++){
		t('.menus')[i].style.borderBottom = '';
		t('.menus')[i].style.opacity = '';
	}
}
function click_on(a){
	a.style.borderBottom = '2px solid';
	a.style.opacity = '1';
}

function animo(a){
	a.style.animation = 'goin .3s';
	setTimeout(function() {
		a.style.animation = '';
	}, 350);
}


t('.menus')[0].onclick = function(){
	clear_but();
	click_on(this);
	t('#video_block').style.display = 'none';
	t('#photo_block').style.display = 'none';
	t('#change').style.display == 'none' ? t('#change').style.display = 'flex' : 1;
	animo(t('#change'));
	t('#people').style.opacity = '0';
	setTimeout(function() {
		t('#people').style.opacity = '1';
		animo(t('#people'));
	}, 300);
}
t('.menus')[1].onclick = function(){
	clear_but();
	click_on(this);
	t('#video_block').style.display = 'none';
	t('#change').style.display = 'none';
	t('#photo_block').style.display = 'flex';
	animo(t('#photo_block'));
}
t('.menus')[2].onclick = function(){
	clear_but();
	click_on(this);
	t('#change').style.display = 'none';
	t('#photo_block').style.display = 'none';
	t('#video_block').style.display = 'flex';
	animo(t('#video_block'));
}

for(let i = 0; i < 107; i++){
	t('#photo_block').innerHTML += '<img src="img/photo/' + i + '.jpg">';
}

t('.year')[10].style.background = '#dfdfdf';
open_videos(10);

function close_years(){
	for(let i = 0; i < 11; i++){
		t('.year')[i].style.background = '';
	}
}


for(let i = 0; i < 11; i++){
	t('.year')[i].onclick = function(){
		if(this.style.background == 'rgb(223, 223, 223)')return false;
		console.log(this.style.background)
		close_years();
		this.style.background = '#dfdfdf';
		t('#video_box').innerHTML = '';
		open_videos(i);
	}
}

function open_videos(a){
	switch(a){
		/*2018*/
		case 10: t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/66ZPTbSGh4k?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2017*/
		case 9: t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Kaay-yybQ4c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML +='<iframe width="560" height="315" src="https://www.youtube.com/embed/O8BFyIJWF5U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML +='<iframe width="560" height="315" src="https://www.youtube.com/embed/9Ueqtwv2RGc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML +='<iframe width="560" height="315" src="https://www.youtube.com/embed/2eV-7mlGzPM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML +='<iframe width="560" height="315" src="https://www.youtube.com/embed/Ei1cWcRWxGc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML +='<iframe width="560" height="315" src="https://www.youtube.com/embed/RQOoEburM0A?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2016*/
		case 8: t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/OT5Os9NP1jc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/wuRP-lDIsMo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/kUTp4yvyJU0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dwvUKYnD8gg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/HfJk-e477cY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/oChv99xPX4g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/bMz95kiqEa8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QRQP8MS6W_Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/pWdTlCFlIQ0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/DiJUU5Y9toA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/t5G79x4aIRw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RsvUUUyX21c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/kC0GBtl5sls" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/C6rk7DOt66g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/CnhE5bMcBjU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/IIIqC6V34Cg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RRD7dvKghZQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/hXt_019q-vc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/OLeBNGmSnpM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8G6vv6-gcIc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ITEac1_XKP0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/G_X1BslTWII" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AVcEsjJ4FHk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/jKCqtjLn_Lg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/j5AkLSHXH5k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AqntT3jeph0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/hUj6Q24_MsU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2015*/
		case 7:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gu3na1ix-iI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2v3xLeLDurw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/zem-VtrtD3c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/BcKBkIrQQ-c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/f8e4Aeaj2GA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rx6k4d8mEf4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/of2rjfd0sTs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/PR_HFNRpYbM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/PR_HFNRpYbM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/_gT3bYRlBHs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yLq4lDMOWSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/IraO_RfLZxE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/lVZpIqTXsCA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eMDnCPozjCE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/zIeAFu3FL8A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/3LQwvABABOM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QXKCxpeKdbs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2014*/
		case 6:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/r1yDxxSA7kA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/I1G_5yoo5ws" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/P1q1pzOVerw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/I6f8iAORY68" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/CJRX8uYmYIw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/uXaFXHJGLCM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/K6oAAsGg2yc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/GkybGz-I1Ts" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QOJD9l3hcSw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/-DtGRKf-mcA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/c-9i8_NL18k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/KiclR_iAn10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/CPtGV1CJOic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/jhrdGMx5Q74" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/iKDXsEtipIQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/iOismQbrfEs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VkjE0o1p1k0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/vxEfGW0IOhs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yCboPnAv90k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/C4PvCyHLOEU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2013*/
		case 5:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwEFsdnbcK4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/6o1fRO00zKY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/HEr5jbPOT38" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/7GAIHwXsWzw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eCg3lmUXJ9g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZfpuoMtdEYI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dWvJZDKISyw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/EkHbGlNs1hU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/mxeN4_tapWw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2BJU4RdDcRE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtXsBmRC9wI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QSbXomqYgKE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/euysbSkt-9M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/UqNL22Sru6Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/i5ULVAphCOY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WwtKL34ZFYw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/1A_5rEaZJlc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/YRMUXbbB32U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/UmeOqOSYFog" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RROIjuUY-bg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yDHP8HQRSNM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/XPXTkFM2c9c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Vb-UwLWq0Wk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/6o8TOm0SGYc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gd4yJHgFCng" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bABacibD9I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/hPAmM5N13kw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/o9Uq6-FV738" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/YkEeL3UBENU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/wL1337sbArQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/0bbl5-IvYoI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WEsU4bGO3no" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ELYpcC2j-kA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/EYRZD18t_hE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RXBnPJ50jjg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2BJU4RdDcRE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/HEr5jbPOT38" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/6o1fRO00zKY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwEFsdnbcK4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xmo96_yIWC0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZEr-URzwbXM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yBDUF2TZL4M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2012*/
		case 4:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/YRMUXbbB32U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/FMy_-7HZhK4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/D9aW7rtI7l8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WANsvky0vYA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QN08qFhiGik" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/QVTNQyS5A1o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/bCkV9HPYN-U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/KMy8H3CZEmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/hA5hE3z7CWY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/1hIgO169gVY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/XlarDOeLW70" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/nidugQGbQHw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/IhXqLyyhTxs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtcfJccv0yQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/KdRGgzXwbUk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yDKNxfs93tA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/vXhoto6rfhY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZL51pE-mPtc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtcfJccv0yQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/nidugQGbQHw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/D9aW7rtI7l8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xyhg9bq3tvU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/__aK9Qh24g0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/roaZO84Pumk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvLA_mSOlKg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qugXDqUPtDk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/5_iLdWHl61U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/cQlRTDifAS8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2011*/
		case 3:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Es0M__M07F0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/6rO-dl-6CaU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WGrSQ7UBexI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/DU_WntVVRa8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/L_tchnX0Sv8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/P3RMWhK4NGU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/seV1csps_QE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/9m7XNVXboZk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/H0-XN2337Os" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/plg8h0vPbmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eJgqCjz8G5Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/nMejTsQnfpA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/TEia4buPgq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Nbe_3n3hcKc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8U98Yo9Y1XE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qJF04IfTJk0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AS9EJ_5Jkak" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dsifyZdY268" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/KiMR_nC1RxM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qNXpWiv0h7Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/B__e3fffImk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZD3EI-eAH18" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/rDEu735QDVk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/iz4Z8fhYgFs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/d6J5IV65tpk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/LcJeKJN_xIo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/MhSmyLrJRGk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eds9z4S_E14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/z0y-ABzyztk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/re6xV5h-Akw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/jUS6acTaCv4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/5UrjDGKUSbM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/B0I-l7o2W-8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/lndHKG0TgPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/kwV5dQYQpU4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/05CMvLP_aIA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/b78w_2xFhFI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/FFZEXXUE-Rw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Zq54W1e8F_Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/7gIfq8xQCAU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/3DG6bgxSkGA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/wYFmO_7-PfE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWODBaofo7o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/iPcaPOyw4yA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AUexzOXyFYM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8nTF5QsjQ4o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/YBIdRcduIfs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/37_WJ3QZQcI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/HkfxU-2h5F8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2LaKxCP7nPg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ev0TiSZvVA4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/PPzk9caE5NE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qff3rLz7sBU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/bJmCf4KT1gk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xMJL3LDBMz8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/cNyh2tpG4g4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/U9aHdLOVias" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dvMzZv1_rmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2CkJFqOoxDQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/vwX3QQfs3Og" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/LSY3m5Y18lQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/J5j9MVPfjAI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ujq5kyCQP2c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/MBaJsB-J0KY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/IhhB-wce2cs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/OCYfX_6V6UA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ap1I8NE8kp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/3tRYXuvT4Ws" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/spdovsAd1w8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/MXMXN9jDDg8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/wddWdOpwCNA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/CL3877Fc0JM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/sCu_GepCfKs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/0zj3dMB4Hks" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZlLdpeMwurQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/aiK2VqWF4ZQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/cpO16alXRF0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/yHLGjC_3vtQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WxXUDo1P_H0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZoJu92vGuP8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/4KcevCWQzIA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/rTuTsZ2iP9Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/jVadZm52NwI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VyjYxSNTRZg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VCz5_k-xKQ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Nb5xnUtWalg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/rqxSmsrtuIU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/lzu7oKdQJZY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/G_S5Tldadvc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/_bopI7FDR-M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/D1bKhIUJnIs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gu2locLgQ8g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8GC0oMdt1VU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2010*/
		case 2:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/bR-dJEnJQXU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/UHCRpahAVWE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/5vjLuSwg-As" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ppOQOJV7guI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WHOBMWJ2Zv8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Ab2ZujSfNo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eTfxM-xPCoQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/zbp65vdbZCo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8u5oop_SZA0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/FqYAmN5W8m8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/XZHkGp6yQfw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/3c16gOinl9I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/9Lgw7l05QtI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/_yX_0at2avs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/9IYEw3TU0ng" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/tKPLvyt2qdI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/tSRa8wN9Xmw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/fkaRE67rh8w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/wvuQEpqTSVk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/b3_aN3jzQdY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNIiAfSbN8k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xfe0yhnJ0VI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qXD4mSXW-88" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/XTRFOesKumE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8IYAbHb8WSE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/k-QK2DksVe0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RcEXNoS8S9w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ODEalaY4aPU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/JZbwHgTevF8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/DIZNaS2xOBc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/OHxf9pcvyQQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/y9cXrg30QiI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dljx4fKIZu0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/_E9HeJA_hGU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/jWk_Z7770ko" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xWWXz_-vIpE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/vmwh1s80lk8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/NZb0FKi9Ar8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2009*/
		case 1:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8YtWoBOSu0A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/bNo-u5oKZMU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/95ijRyZRrtc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/fWsMjjt7IvM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/pbmKkGmzGA8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/OgzMcCf9u9w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/FvIKuhcBopM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/L3xGj6AUYhA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/MlglVGEqAzE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/TrKBJpxp5xE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Zot7kJ5WKpc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/gxo5DMf6F2o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/6ocwMGAjd4w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/7zeOw8SuZEM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/BPdmUgdwB3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/z1dfiy32GGg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-P88-Mlv80" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/y3DGgOwWTzE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/x0KXAK7dXQQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Te87nUj_MRc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/r6EpWKVSrNw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/y6cC8KYzou0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AGYUjc6LcLg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
		/*2008*/
		case 0:
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/zovhDAw84Qs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8RooxYhjE3A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ddlqCKOmzao" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/86JR1SJy7OA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/f1SNSOOBgIE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/vOntQkluuio" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eBqjgDNMg9s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dasd-yZhqYo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/7pBEjJ3fZcI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/U_cD56GABKk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/BHseXBQbLNE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/eHHmioD8Yio" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/koUSDyf9hoU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/WdCtcSJZQTk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xEMg-Omh_jg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/v4-S0Ume6Pc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/PvVgjl13Jnc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/2IxIJIpbVfc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/qeEmHRxSfWg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/AzMfkVQt_mM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/88xf7rknHuY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/xn7lsfoY4mc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RJpM32GWtic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/VUX66DyzIdc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		t('#video_box').innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/pAn-voNnK40" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		break;
	}
}