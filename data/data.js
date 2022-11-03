function tambah() {
	var a = document.getElementById("angka1").value;
	var b = document.getElementById("angka2").value;
	var hasil = parseInt(a) + parseInt(b);
	
	document.getElementById("hasil").innerHTML = hasil;
}

function kurang() {
	var a = document.getElementById("angka1").value;
	var b = document.getElementById("angka2").value;
	var hasil = parseInt(a) - parseInt(b);
	
	document.getElementById("hasil").innerHTML = hasil;
}

function kali() {
	var a = document.getElementById("angka1").value;
	var b = document.getElementById("angka2").value;
	var hasil = parseInt(a) * parseInt(b);
	
	document.getElementById("hasil").innerHTML = hasil;
}

function bagi() {
	var a = document.getElementById("angka1").value;
	var b = document.getElementById("angka2").value;
	var hasil = parseInt(a) / parseInt(b);
	
	document.getElementById("hasil").innerHTML = hasil;
}

function pangkat() {
	var a = document.getElementById("angka1").value;
	var b = document.getElementById("angka2").value;
	var hasil = parseInt(a) ** parseInt(b);
	
	document.getElementById("hasil").innerHTML = hasil;
}

function hapus() {
	document.getElementById("angka1").value = "";
	document.getElementById("angka1").value = "";
	document.getElementById("hasil").innerHTML = "";
}

function developer() {
	alert ("Aplikasi ini dibuat oleh Adrian");
	alert ("Menerima konsultasi ringan");
	alert ("Mengalami kendala? Hubungi: 089617195237");
}

function kantor() {
	window.open ("https://goo.gl/maps/hBeWhJEuvNb5jfGSA","_blank");
}

function kontak() {
	window.open ("http://wa.me/+6289617195237","_blank")
}