document.addEventListener("DOMContentLoaded",function(){
	//Truy xuất phần tử 2 nút trái phải và các slide
	var nut = document.querySelectorAll('div.nut ul li'),
		nuttrai = nut[0],
		nutphai = nut[1];
	var slides = document.querySelectorAll('div.slides ul li')
	// Tìm ra số phần tử cuối cùng vì là mảng nên chúng ta sẽ lấy độ dài của mảng - 1
	var cuoicung = slides.length - 1;
	//Khi click nút trái
	var anhnho = document.querySelectorAll('div.anhnho li');
	chuyenslide = function(){
		//1.Lấy vị trí slide hiện tại
		var vitrislideht = 0
		var slideht = document.querySelector('ul li.hienlen');
		var anhnhoht = document.querySelector('div.anhnho li');
		for(var i = 0; slideht = slideht.previousElementSibling; vitrislideht++){

		}// đã lấy được vị trí sau khi thực hiện vòng lặp for này.
		//2. Bỏ tất cả các class hienlen
		for(var i = 0; i < slides.length; i++){
			slides[i].classList.remove('hienlen');
			anhnho[i].classList.remove('duongvien');
		}
		//3.2 Khi slide chuyển đến 0 thì đặt vitrislide hien tại = vitricuoicung + 1 
		if(vitrislideht == 0){
			vitrislideht = cuoicung + 1;
			slides[vitrislideht-1].classList.add('hienlen');
			anhnho[vitrislideht-1].classList.add('duongvien');
		}
		else{
		//3.1 Chuyển sang slide phía sau 
		slides[vitrislideht-1].classList.add('hienlen');
		anhnho[vitrislideht-1].classList.add('duongvien');
		}

	}
	// Chỉ cần thực hiện 1 hàm r x2 lên thay đổi 1 tí là dc!!!
	chuyenslidep = function(){
		//1.Lấy vị trí slide hiện tại
		var vitrislideht = 0;
		var slideht = document.querySelector('ul li.hienlen');
		for(var i = 0; slideht = slideht.previousElementSibling; vitrislideht++){

		}// đã lấy được vị trí sau khi thực hiện vòng lặp for này.
		//2. Bỏ tất cả các class hienlen
		for(var i = 0; i < slides.length; i++){
			slides[i].classList.remove('hienlen');
			anhnho[i].classList.remove('duongvien');
		}
		if(vitrislideht == cuoicung){
			vitrislideht = -1;
		//ở đây mình k cần dùng else vì khi thực hiện xong lệnh if nó sẽ nhảy xuống thực hiện lệnh add class luôn. 
		}
		//3. Chuyển sang slide lên trước
		slides[vitrislideht+1].classList.add('hienlen');
		//4. Đến slide đầu tiên thì chuyển đến nó đến vị trí cuôi cùng.
		anhnho[vitrislideht+1].classList.add('duongvien');
	}

	nuttrai.addEventListener('click',chuyenslide);
	nutphai.addEventListener('click',chuyenslidep);
},false)