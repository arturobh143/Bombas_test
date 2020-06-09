// Parametros ambientales
let x_par = 50; 
let y_par = 80;
let input1;
let input2;
let input3;
let temp_ambiente;
let pres_ambiente;
let hum_ambiente;
let button1;
let button2;
let is_insert_par;

// Control de velocidad
let x_cont = 540; 
let y_cont = 80; 
let angle1;
let oldAngle1;
let sent1;
let calcAngle1;
let velocidadRPM;
let rz = 35; //Diametro de control de velocidad
let drag1 = false; //Estado del movimiento de perilla velocidad
let drag2 = false; //Estado del movimiento de slide de apertura
let slider;
let ap;

// Modulo de enesayo
let x_mod = 50; //Posición del frame
let y_mod = 300;
let x_mot = 180;//Posición del motor
let y_mot = 50;
let angle_eje;

//Imagenes
let logo_pucp;
let logo_laben;
let vis_iso_1;
let vis_iso_2;
let vis_iso_3;
let vis_iso_4;
let vis_lado;
let v_base_intermedia_abierta;
let v_base_intermedia_cerrada;

//Datos por horarios
let horarios = ['H6M1', 'H6M2', 'H6M3', 'H6M4', 'H6M5'];
//Cd de vertedero
let Cd= [0.58,0.6,0.62,0.64,0.66];

//Distribución
let num_hor;
let is_change_hor;

// Valores de real de operacion
let mod_vision;
let vis_num;
let mod_operacion;
let is_paralelo;
let is_serie;
let is_otros;
//Booleanos
let val_des_b1_ab;
let val_int_ab;
let val_paralelo_ab;
let val_serie_ab;
let val_suc_b1_ab;
let val_suc_b2_ab;

// Valores del mouse
let x_mouse;
let y_mouse;

// Valores de vertedero
let altura;
let altura_ob;
let caudal; //m3/h
let caudal_ob;
let caudal_max; //m3/h
let apertura_paralelo;
let apertura_serie;
let alt_tub;
let alt_tub_ob;
let alt_acc;
let alt_acc_ob;
let dp_tub;
let dp_acc;

//valores de tuberia
let dia = 35.7; //diametro interno en mm
let rug_1 = 0.0025; //Acero  Nuevo
let rug_2 = 0.05; // Acero corroido
let rug_3 = 0.001; // Cobre
let rug_4 = 0.15; // Acero galvanizado
let rug;
let re;
let dens;
let vis;
let factor_fric;
let is_rug1;
let is_rug2;
let is_rug3;
let is_rug4;
let a;
let b;
let caudal_ob_ant;
let rug_ant;
let dens_hg;

function preload(){
	logo_pucp = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/logo_pucp.png');
	logo_laben = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/logo_laben.png');
	//Visualización
	vis_lado = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/vis_lado.png');
	vis_iso_1 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/vis_iso_1.png');
	vis_iso_2 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/vis_iso_2.png');
	vis_iso_3 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/vis_iso_3.png');
	vis_iso_4 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/vis_iso_4.png');
	//Operación
	// 1. Valvulas
	v_base_des_b1_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_des_b1_abierta.png');
	v_base_des_b1_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_des_b1_cerrada.png');
	v_base_intermedia_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_intermedia_abierta.png');
	v_base_intermedia_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_intermedia_cerrada.png');
	v_base_paralelo_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_paralelo_abierta.png');
	v_base_paralelo_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_paralelo_cerrada.png');
	v_base_serie_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_serie_abierta.png');
	v_base_serie_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_serie_cerrada.png');
	v_base_suc_b1_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_suc_b1_abierta.png');
	v_base_suc_b1_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_suc_b1_cerrada.png');
	v_base_suc_b2_abierta = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_suc_b2_abierta.png');
	v_base_suc_b2_cerrada = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/V_base_suc_b2_cerrada.png');
	// 2. Banco en paralelo
	base_paralelo_0 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_0.png');
	base_paralelo_25 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_25.png');
	base_paralelo_50 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_50.png');
	base_paralelo_75 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_75.png');
	base_paralelo_100 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_100.png');
	base_paralelo_125 = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Base_paralelo_125.png');
	manometro = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/Manometro_u_0.png');
	visor = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/visor_2.png');
	visor_man = loadImage('https://raw.githubusercontent.com/arturobh143/Bombas_test/gh-pages/visor_man.png');
}

function setup() {
	//940, 750
    createCanvas(950, 900);
    //createCanvas(displayWidth, displayHeight);
    textAlign(CENTER, CENTER);
    logo_pucp.resize(150, 50);
    logo_laben.resize(150, 50);
    angleMode(DEGREES);
    // Parámetros ambientales-------------------------------------
	//Inputs de variables ambientales
    input1 = createInput();
    input1.position(x_par + 70, y_par + 63);
    input1.style('width', '120px');
    input2 = createInput();
    input2.position(x_par + 70, y_par + 103);
    input2.style('width', '120px');
    input3 = createInput();
    input3.position(x_par + 70, y_par + 143);
    input3.style('width', '120px');
	//Bóton
    button1 = createButton('Ingresar P.A.');
    button1.position(x_par + 330, y_par + 130);
	button1.size(100,50);
	num_hor = 0;
	button2 = createButton(horarios[num_hor]);
    button2.position(x_par + 330, y_par + 55);
    button2.size(100,50);
	is_change_hor = false;
	is_insert_par = false;
	// Valores iniciales de variables ambientales
    temp_ambiente = 25;
    pres_ambiente = 103;
    hum_ambiente = 85;
	// Control de velocidad------------------------------------------
    angle1 = 135;
    oldAngle1 = 0;
    sent1 = 'AntiHorario';
    calcAngle1 = 0;
    velocidadRPM = 0;
	// Control de apertura--------------------------------------------
    ap = 0;
    slider = createSlider(0,100,0,10);
    slider.position(x_cont+180, y_cont+120);
    slider.style('width', '150px'); 
	//Valores de valvulas
	val_des_b1_ab = false;
	val_int_ab = false;
	val_paralelo_ab = false;
	val_serie_ab = false;
	val_suc_b1_ab = false;
	val_suc_b2_ab = false;
	mod_operacion = false;
	mod_vision = true;
	vis_num = 1;
	is_paralelo = false;
	is_serie = false;
	is_otros = true;
	//valores de mouse
	x_mouse = 0;
	y_mouse = 0;
	// Valores de vertedero
	altura = 0.0;
	caudal = 0.0;
	apertura_paralelo = 0;
	apertura_serie = 0;
	caudal_max = 0.0;
	caudal_ob = 0.0;
	altura_ob = 0.0;
	re = 0;
	dens = 1000.00;
	dens_hg = 13530.00;
	vis = 1.569; //*10(-3)
	factor_fric = 0;
	is_rug1 = true;
	is_rug2 = false;
	is_rug3 = false;
	is_rug4 = false;
	rug = rug_1;
	a = 0;
	b = 0;
	caudal_ob_ant = 0;
	rug_ant = 0;
	dp_tub = 0;
	dp_acc = 0;
	alt_tub = 0;
	alt_acc = 0;
	alt_tub_ob = 0;
	alt_acc_ob = 0;
}

function draw(){
	background(220);
    strokeWeight(1);
    fill(255);
    rect(50, 5, 850, 60);
    fill(0);
    textStyle(BOLD);
    textSize(14);
    text('X =  ', 470 , 20);
	text(mouseX, 490 , 20);
    text('Y =  ', 470 , 40);
	text(mouseY, 490 , 40);
    image(logo_pucp, 60, 10);
    image(logo_laben, 740, 10);
	//Parámetros ambientales
	dib_parametros(x_par,y_par);
	//Controles
    dib_controles(x_cont, y_cont);
	if(mod_vision){
		dib_visualizacion(vis_num);
	}else if(mod_operacion){
		dib_operacion(vis_num);
	}
	if(abs(caudal-caudal_ob)>0.5){
		if(caudal<caudal_ob){
			caudal = caudal + 0.5;
		}else if(caudal>caudal_ob){
			caudal = caudal - 0.5;
		}
	}
	if(altura<altura_ob){
		altura = altura + 0.1;
	}else if(altura>altura_ob){
		altura = altura - 0.1;
	}
	if(is_serie){
		fill(0);
		textSize(14)
		text(round(fact_fric,5),600,30);
		a = 1.00/sqrt(fact_fric);
		re = 1000*((dens*(dia/1000.00)*4*(caudal_ob/3600.00))/(3.1416*((dia/1000.00)**2.00)))/vis;
		b = (log(((rug/1000.00)/(3.7*dia/1000.00))+(2.51/(re*sqrt(fact_fric))))/log(10.00))*(-2.00);
		text(round(a,2),600,15);
		text(round(b,2),600,45);
		//text(round(caudal_ob,2),600,60);
		//text(round(re,2),600,75);
		if(abs(b-a)>0.150){
			fact_fric = fact_fric-0.001;
		}else{
			dp_tub = fact_fric*2.13*dens*(((caudal_ob/3600.00)*4/(3.1416*((dia/1000.00)**2.00)))**2.00)/(2.00*(dia/1000.00));
			dp_acc = fact_fric*(((2.118+0.315+2.125)/(dia/1000))+60)*dens*(((caudal_ob/3600.00)*4/(3.1416*((dia/1000.00)**2.00)))**2.00)/2.00;
			alt_tub_ob = 1000.00*dp_tub/(9.81*(dens_hg-dens));
			alt_acc_ob = 1000.00*dp_acc/(9.81*(dens_hg-dens));
			text(round(alt_tub_ob,2),650,15);
			text(round(alt_acc_ob,2),650,45);
		}
		if(alt_tub<alt_tub_ob){
			alt_tub = alt_tub + 0.2;
		}else if(alt_tub>alt_tub_ob){
			alt_tub = alt_tub - 0.2;
		}
		if(alt_acc<alt_acc_ob){
			alt_acc = alt_acc + 0.2;
		}else if(alt_acc>alt_acc_ob){
			alt_acc = alt_acc - 0.2;
		}
	}
}

function mousePressed() {
	if((mouseX>x_par+330)&&(mouseX<x_par+430)&&(mouseY>y_par+55)&&(mouseY<y_par+105)){
		is_change_hor = true;
	}
	if((mouseX>x_par+330)&&(mouseX<x_par+430)&&(mouseY>y_par+130)&&(mouseY<y_par+180)){
		is_insert_par = true;
	}
    //Perilla de velocidad
    if (dist(mouseX, mouseY, x_cont + 80, y_cont + 80) < rz) {
        drag1 = true;
    }
	x_mouse = mouseX;
	y_mouse = mouseY;
}

function mouseReleased(){
	if(is_change_hor){
		is_change_hor = false;
		if(num_hor==4){
			num_hor=0;
		}else{
			num_hor = num_hor+1;
		}
		button2.html(horarios[num_hor]);
	}
	if(is_insert_par){
		is_insert_par = false;
		iv1 = float(input1.value());
		iv2 = float(input2.value());
		iv3 = float(input3.value());
		if (iv1 > -10 && iv1 < 35 && iv1 != '') {
			temp_ambiente = float(input1.value()); //Temperatura
		}
		if (iv2 > 80 && iv2 < 120 && iv2 != '') {
			pres_ambiente = float(input2.value()); //Presión
		}
		if (iv3 > 60 && iv3 < 101 && iv3 != '') {
			hum_ambiente = float(input3.value()); //Humedad
		}
		input1.value('');
		input2.value('');
		input3.value('');
	}
    drag1 = false;
	if(mod_vision){
		if (dist(x_mouse, y_mouse, 922, 555) < 40) {
			if(vis_num == 1){
				vis_num = 5;
			}else{
				vis_num = vis_num - 1;
			}
		}else if(dist(x_mouse, y_mouse, 27, 555) < 40){
			if(vis_num == 5){
				vis_num = 1;
			}else{
				vis_num = vis_num + 1;
			}
		}else if(dist(x_mouse, y_mouse, 845, 145) < 50){
			mod_vision = false;
			mod_operacion = true;
			vis_num = 1;
			angle1 = 135;
		}
	}
	if(mod_operacion){
		if(dist(x_mouse, y_mouse, 745, 145) < 50){
			mod_operacion = false;
			mod_vision = true;
			vis_num = 1;
		}else if ((dist(x_mouse, y_mouse, 922, 555) < 40)||(dist(x_mouse, y_mouse, 27, 555) < 40)) {
			if(vis_num == 1){
				vis_num = 2;
			}else{
				vis_num = 1;
			}
		}else if (dist(x_mouse, y_mouse, 685, 740) < 20){
			if(val_suc_b1_ab){
				val_suc_b1_ab = false;
			}else{
				val_suc_b1_ab = true;
			}
		}else if (dist(x_mouse, y_mouse, 625, 765) < 20){
			if(val_suc_b2_ab){
				val_suc_b2_ab = false;
			}else{
				val_suc_b2_ab = true;
			}
		}else if (dist(x_mouse, y_mouse, 630, 675) < 20){
			if(val_int_ab){
				val_int_ab = false;
			}else{
				val_int_ab = true;
			}
		}else if (dist(x_mouse, y_mouse, 645, 620) < 20){
			if(val_des_b1_ab){
				val_des_b1_ab = false;
			}else{
				val_des_b1_ab = true;
			}
		}else if (dist(x_mouse, y_mouse, 605, 585) < 20){
			if(val_serie_ab){
				val_serie_ab = false;
			}else{
				val_serie_ab = true;
			}
		}else if (dist(x_mouse, y_mouse, 540, 600) < 20){
			if(val_paralelo_ab){
				val_paralelo_ab = false;
			}else{
				val_paralelo_ab = true;
			}
		}
	}
	if(vis_num == 1){
		if(val_suc_b1_ab&&val_suc_b2_ab&&(!val_int_ab)&&val_des_b1_ab&&(!val_serie_ab)&&val_paralelo_ab){
			is_paralelo = true;
			is_serie = false;
			is_otros = false;
		}else if(val_suc_b1_ab&&(!val_suc_b2_ab)&&val_int_ab&&(!val_des_b1_ab)&&val_serie_ab&&(!val_paralelo_ab)){
			is_paralelo = false;
			is_serie = true;
			is_otros = false;
		}else{
			is_paralelo = false;
			is_serie = false;
			is_otros = true;

		}
	}
	if((dist(x_mouse, y_mouse, 450, 680) < 20)&&(vis_num == 2)){
		vis_num = 3;
	}else if((dist(x_mouse, y_mouse, 455, 538) < 150)&&(vis_num == 3)){
		vis_num = 2;
	}
	if((dist(x_mouse, y_mouse, 200, 630) < 60)&&(vis_num == 2)){
		vis_num = 4;
	}else if((dist(x_mouse, y_mouse, 490, 575) < 200)&&(vis_num == 4)){
		vis_num = 2;
	}
	if(is_paralelo){
		ap = slider.value();
		caudal_max = 3600.00*(2.00*velocidadRPM/1000000.00);
		caudal_ob = (ap/100.00)*caudal_max;
		altura_ob = 1000.00*(((caudal_ob/3600.00)/(2.361*Cd[num_hor]))**(2/5));
	}else if(is_serie){
		ap = slider.value();
		caudal_max = 1800.00*(2.00*velocidadRPM/1000000.00);
		caudal_ob = (ap/100.00)*caudal_max;
		altura_ob = 1000.00*(((caudal_ob/3600.00)/(2.361*Cd[num_hor]))**(2/5));
		if(dist(x_mouse, y_mouse, 100, 870) < 20){
			is_rug1 = true;
			is_rug2 = false;
			is_rug3 = false;
			is_rug4 = false;
			rug = rug_1;
		}else if(dist(x_mouse, y_mouse, 190, 870) < 20){
			is_rug1 = false;
			is_rug2 = true;
			is_rug3 = false;
			is_rug4 = false;
			rug = rug_2;
		}else if(dist(x_mouse, y_mouse, 280, 870) < 20){
			is_rug1 = false;
			is_rug2 = false;
			is_rug3 = true;
			is_rug4 = false;
			rug = rug_3;
		}else if(dist(x_mouse, y_mouse, 370, 870) < 20){
			is_rug1 = false;
			is_rug2 = false;
			is_rug3 = false;
			is_rug4 = true;
			rug = rug_4;
		}
		if((caudal_ob_ant==caudal_ob)&&(rug_ant==rug)){
		}else{
			fact_fric = 0.1;
		}
		caudal_ob_ant = caudal_ob;
		rug_ant = rug;
		
	}else{
		caudal_max = 0;
		caudal = 0;
		altura = 0;
		caudal_ob = 0;
		altura_ob = 0;
	}
}

function dib_parametros(x1, y1){
	fill(250);
    strokeWeight(1);
    rect(x1, y1, 470, 200);
    line(x1 + 280, y1 + 10, x1 + 280, y1 + 120);
	line(x1 + 280, y1 + 120, x1 + 460, y1 + 120);
    // Texto
    fill('black');
    textStyle(BOLD);
    textSize(14);
    text('PARÁMETROS ', x1 + 150 , y1 + 20);
    text('AMBIENTALES ', x1 + 150 , y1 + 40);
    text('SELECCIONAR ', x1 + 380, y1 + 20);
    text('HORARIO ', x1 + 380, y1 + 40);


    // Etiquetas
    fill(0);
    textStyle(BOLD);
    rect(x1 + 20, y1 + 60, 30, 30);
    rect(x1 + 20, y1 + 100, 30, 30);
    rect(x1 + 20, y1 + 140, 30, 30);

    textSize(14);
    fill(0, 255, 0);
    text('Ta', x1 + 35, y1 + 75); //Temperatura ambiental
    text('Pa', x1 + 35, y1 + 115); //presion
    text('Ha', x1 + 35, y1 + 155); //Humedad
	
	// Unidades
    fill(0);

    text('°C', input1.x + input1.width + 60, input1.y + 12);
    text('kPa', input2.x + input2.width + 60, input2.y + 12);
    text('% HR', input3.x + input3.width + 60, input3.y + 12);

    text(temp_ambiente, input1.x + input1.width + 25, input1.y + 12);
    text(pres_ambiente, input2.x + input2.width + 25, input2.y + 12);
    text(hum_ambiente, input3.x + input3.width + 25, input3.y + 12);
	fill(0);
    textSize(12);
}

function dib_controles(x2,y2) {
    fill(250);
    strokeWeight(1);
    rect(x2, y2, 360, 200);
    // Texto
    fill('black');
    textStyle(BOLD);
    textSize(14);
    text('CONTROLES', x2 + 380 / 2, y2 + 20);
  
    fill(0);
    rect(x2 + 40, y2 + 95 + rz + 30, 80, 30);
	rect(x2 + 220, y2 + 95 + rz + 30, 80, 30);

    textSize(12);
    text('VELOCIDAD DE MOTORES', x2 + 80, y2 + 80 + rz + 30);
	text('APERTURA', x2 + 260, y2 + 80 + rz + 30);
  
    // Control de velocidad
    fill('black');
    //Lineas gruesas
    push();
    var i;
    translate(x2 + 80, y2 + 80);
    rotate(135);
    strokeWeight(2);
    line(0, 0, 50, 0);
    for(i = 1; i < 4; i++){
      rotate(90);
      strokeWeight(2);
      line(0, 0, 50, 0);
    }
    pop();
    //Lineas delgadas
    push();
    var i;
    translate(x2 + 80, y2 + 80);
    rotate(180);
    strokeWeight(1);
    line(0, 0, 45, 0);
    for(i = 1; i < 3 ; i++){
      rotate(90);
      strokeWeight(1);
      line(0, 0, 45, 0);
    }
    pop();
    //Circulo
    fill(110);
    strokeWeight(3);
    ellipse(x2 + 80, y2 + 80, rz * 2, rz * 2);
    // Logica de movimiento de indicador
    if(drag1){
        dx1 = mouseX - (x2+80);
        dy1 = mouseY - (y2+80);
        angle1 = atan2(dy1,dx1);
        if(oldAngle1>angle1){
          sent1 = 'Horario';
        } else{
          sent1 = 'AntiHorario';
        }
        fill(0,153,0);
    } else{
        fill(255);
    }
    //Dibujar indicador
    if (angle1 >= 135 && angle1 <= 180){ //Entre 1000 y 1500 RPM
        calcAngle1 = map(angle1,135,180,1000,1500);
    } else if(angle1 <= 0 && angle1 >= -180){ //Entre 1500 y 3500 RPM
        calcAngle1 = map(angle1,-180,0,1500,3500);
    } else if(angle1 >= 0 && angle1 <= 45){ //Entre 3500 y 4000 RPM
        calcAngle1 = map(angle1,0,45,3500,4000);
    } else if(angle1 > 45 && angle1 < 135){ //Zona no valida
        if(sent1 == 'Horario'){
            angle1 = 135;
            calcAngle1 = 1000;
        } else if(sent1 == 'AntiHorario'){
            angle1 = 45;
            calcAngle1 = 4000;
        }
    }
    //Dibujo de bola
    push();
    translate(x2+80,y2+80);
    rotate(angle1);
    ellipse(rz-15,0,10,10);
    pop();
    //Dibujo indicador
    fill(0);
    oldAngle1 = angle1;
    textAlign(CENTER);
    velocidadRPM = int(calcAngle1);
    fill(0, 255, 0);
    textSize(14);
    text(velocidadRPM, x2 + 60, y2 + 110 + rz + 30);
    text('RPM', x2 + 100, y2 + 110 + rz + 30);
    //Texto marcadores
    fill('black'); 
    textSize(12);
    textStyle(NORMAL);
    text('1000', x2 + 80 + 65 * cos(135), y2 + 80 + 65 * sin(135));
    text('2000', x2 + 80 + 65 * cos(225), y2 + 80 + 65 * sin(225));
    text('3000', x2 + 80 + 65 * cos(315), y2 + 80 + 65 * sin(315));
    text('4000', x2 + 80 + 65 * cos(45), y2 + 80 + 65 * sin(45));
	
	//Dibujo de control modo de operacion
	if(mod_operacion){
		fill('rgb(165,75,75)');
		strokeWeight(1);
		rect(x2 + 180, y2 + 40 , 50, 50);
		fill('red');
		rect(x2 + 280, y2 + 40 , 50, 50);
	}else if(mod_vision){
		fill('red');
		strokeWeight(1);
		rect(x2 + 180, y2 + 40 , 50, 50);
		fill('rgb(165,75,75)');
		rect(x2 + 280, y2 + 40 , 50, 50);
	}
	fill(0);
	textSize(12);
    text('VISUALIZACIÓN', x2 + 205, y2 + 110);
	text('OPERACIÓN', x2 + 305, y2 + 110);
	//Valor de apertura
    fill(0);
    textAlign(CENTER);
    ap = slider.value();
    fill(0, 255, 0);
    textSize(14);
    text(ap, x2 + 250, y2 + 110 + rz + 30);
    text('%', x2 + 280, y2 + 110 + rz + 30);
}

function dib_visualizacion(vis_num){
	fill(250);
    strokeWeight(1);
	//Triangulo derecha
	triangle(905, 530, 905, 580, 940, 555);
	//Triangulo izquierda
	triangle(45, 530, 45, 580, 10, 555);
	if(vis_num == 1){
		image(vis_iso_1,50,290,850,550,350,0,900,880);
	}else if (vis_num == 2){
		image(vis_lado,50,290,850,550,350,0,900,880);
	}else if (vis_num == 3){
		image(vis_iso_2,50,290,850,550,350,0,900,880);
	}else if (vis_num == 4){
		image(vis_iso_3,50,290,850,550,350,0,900,880);
	}else if (vis_num == 5){
		image(vis_iso_4,50,290,850,550,350,0,900,880);
	}
}

function dib_operacion(vis_num){
	fill(250);
    strokeWeight(1);
	//Triangulo derecha
	triangle(905, 530, 905, 580, 940, 555);
	//Triangulo izquierda
	triangle(45, 530, 45, 580, 10, 555);
	if(vis_num == 1){
		if(altura < 25){
			image(base_paralelo_0,50,290,850,550,350,0,900,880);
		}else if((25<=altura)&&(altura<50)){
			image(base_paralelo_25,50,290,850,550,350,0,900,880);
		}else if((50<=altura)&&(altura<75)){
			image(base_paralelo_50,50,290,850,550,350,0,900,880);
		}else if((75<=altura)&&(altura<100)){
			image(base_paralelo_75,50,290,850,550,350,0,900,880);
		}else if((100<=altura)&&(altura<125)){
			image(base_paralelo_100,50,290,850,550,350,0,900,880);
		}else if(125<=altura){
			image(base_paralelo_125,50,290,850,550,350,0,900,880);
		}
		if(is_paralelo){
			image(manometro,50,290,850,550,350,0,900,880);
		}

		//Valvula descarga de bomba 1
		if(val_des_b1_ab){
			image(v_base_des_b1_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_des_b1_cerrada,50,290,850,550,350,0,900,880);
		}
		//Valvula intermedia para serie
		if(val_int_ab){
			image(v_base_intermedia_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_intermedia_cerrada,50,290,850,550,350,0,900,880);
		}
		//valvula descarga de paralelo
		if(val_paralelo_ab){
			image(v_base_paralelo_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_paralelo_cerrada,50,290,850,550,350,0,900,880);
		}
		//valvula descarga serie
		if(val_serie_ab){
			image(v_base_serie_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_serie_cerrada,50,290,850,550,350,0,900,880);
		}
		//vavlual succion de bomba 1
		if(val_suc_b1_ab){
			image(v_base_suc_b1_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_suc_b1_cerrada,50,290,850,550,350,0,900,880);
		}
		//vavlual succion de bomba 2
		if(val_suc_b2_ab){
			image(v_base_suc_b2_abierta,50,290,850,550,350,0,900,880);
		}else{
			image(v_base_suc_b2_cerrada,50,290,850,550,350,0,900,880);
		}
	}else if (vis_num == 2){
		image(vis_lado,50,290,850,550,350,0,900,880);
		//440 695 hasta 460 660
		fill('blue');
		strokeWeight(1);
		rect(440, 695-int(altura*35.00/150.00),20, int(altura*35.00/150.00));
		fill(0);
		rect(450, 500, 80, 30);
		fill(0, 255, 0);
		textSize(14);
		if(is_paralelo){
			text(round(caudal,2), 480, 515);
			text('m3/h', 510, 515);
		}else{
			text(0, 480, 515);
			text('m3/h', 510, 515);
		}
		if(is_serie){
			//base de mercurio
			fill('rgb(100,110,120)');
			strokeWeight(0);
			rect(208,715,43,12);
			rect(146,715,43,12);
			//presion alta en tramo de tuberia
			rect(239,620+int((alt_tub/2)*(190/400)),12,715-(620+int((alt_tub/2)*(190/400))));
			//presion baja en tramo de tuberia
			rect(208,620-int((alt_tub/2)*(190/400)),12,715-(620-int((alt_tub/2)*(190/400))));
			//presion altra en tramo con accesiorios
			rect(177,620+int((alt_acc/2)*(190/400)),12,715-(620+int((alt_acc/2)*(190/400))));
			//presion baja en tramo con accesorios
			rect(146,620-int((alt_acc/2)*(190/400)),12,715-(620-int((alt_acc/2)*(190/400))));
			//tramos de agua
			fill('blue');
			//presion alta en tramo de tuberia
			rect(239,525,12,(620+int((alt_tub/2)*(190/400)))-525);
			//presion baja en tramo de tuberia
			rect(208,525,12,(620-int((alt_tub/2)*(190/400)))-525);
			//presion altra en tramo con accesiorios
			rect(177,525,12,(620+int((alt_acc/2)*(190/400)))-525);
			//presion baja en tramo con accesorios
			rect(146,525,12,(620-int((alt_acc/2)*(190/400)))-525);
		}

	}else if(vis_num == 3){
		image(visor,50,290,850,550,350,0,900,880);
		//365 715 hasta 430 830
		//340 360 hasta 570 715
		fill('blue');
		strokeWeight(1);
		rect(340, 715-int(altura*355.00/150.00),230, int(altura*355.00/150.00));
		//fill(0);
		//rect(490, 310, 80, 30);
		//fill(0, 255, 0);
		//textSize(14);
		//if(is_paralelo){
		//	text(round(caudal,2), 510, 335);
		//	text('m3/h', 540, 335);
		//}else{
		//	text(0, 510, 335);
		//	text('m3/h', 540, 335);
		//}
		fill(0);
		textSize(15);
		text(0,630, 715);
		text(30,630, 644);
		text(60,630, 573);
		text(90,630, 502);
		text(120,630, 431);
		text(150,630, 360);
		
		text(15,630, 680);
		text(45,630, 609);
		text(75,630, 538);
		text(105,630, 467);
		text(135,630, 396);
		strokeWeight(2);
		line(570,715,600,715);
		line(570,644,600,644);
		line(570,573,600,573);
		line(570,502,600,502);
		line(570,431,600,431);
		line(570,360,600,360);
		
		line(570,680,600,680);
		line(570,609,600,609);
		line(570,538,600,538);
		line(570,467,600,467);
		line(570,396,600,396);
		strokeWeight(1);
		line(570,697,590,697);
		line(570,626,590,626);
		line(570,555,590,555);
		line(570,484,590,484);
		line(570,413,590,413);
		
		line(570,662,590,662);
		line(570,591,590,591);
		line(570,520,590,520);
		line(570,449,590,449);
		line(570,378,590,378);
	}else if(vis_num == 4){
		image(visor_man,50,290,850,550,350,0,900,880);
		if(is_serie){
			//base de mercurio
			fill('rgb(100,110,120)');
			strokeWeight(0);
			rect(358,804,104,16);
			rect(520,804,104,16);
			//presion alta en tramo de tuberia
			rect(608,554+int((alt_tub/2)*(432/400)),16,804-(554+int((alt_tub/2)*(432/400))));
			//presion baja en tramo de tuberia
			rect(520,554-int((alt_tub/2)*(432/400)),16,804-(554-int((alt_tub/2)*(432/400))));
			//presion altra en tramo con accesiorios
			rect(446,554+int((alt_acc/2)*(432/400)),16,804-(554+int((alt_acc/2)*(432/400))));
			//presion baja en tramo con accesorios
			rect(358,554-int((alt_acc/2)*(432/400)),16,804-(554-int((alt_acc/2)*(432/400))));
			//tramos de agua
			fill('blue');
			//presion alta en tramo de tuberia
			rect(608,304,16,(554+int((alt_tub/2)*(432/400)))-304);
			//presion baja en tramo de tuberia
			rect(520,304,16,(554-int((alt_tub/2)*(432/400)))-304);
			//presion altra en tramo con accesiorios
			rect(446,304,16,(554+int((alt_acc/2)*(432/400)))-304);
			//presion baja en tramo con accesorios
			rect(358,304,16,(554-int((alt_acc/2)*(432/400)))-304);
		}else{
			//base de mercurio
			fill('rgb(100,110,120)');
			strokeWeight(0);
			rect(358,804,104,16);
			rect(520,804,104,16);
			//presion alta en tramo de tuberia
			rect(608,554,16,250);
			//presion baja en tramo de tuberia
			rect(520,554,16,250);
			//presion altra en tramo con accesiorios
			rect(446,554,16,250);
			//presion baja en tramo con accesorios
			rect(358,554,16,250);
			//tramos de agua
			fill('blue');
			//presion alta en tramo de tuberia
			rect(608,304,16,250);
			//presion baja en tramo de tuberia
			rect(520,304,16,250);
			//presion altra en tramo con accesiorios
			rect(446,304,16,250);
			//presion baja en tramo con accesorios
			rect(358,304,16,250);
		}
		fill(0);
		textSize(15);
		for(let i = 0; i<10;i++){
			text(180-(i*20),406,329+(i*25));
			text(180-(i*20),576,329+(i*25));
			text(0-(i*20),406,554+(i*25));
			text(0-(i*20),576,554+(i*25));
			strokeWeight(2);
			line(374,329+(i*25),384,329+(i*25));
			line(374,554+(i*25),384,554+(i*25));
			line(436,329+(i*25),446,329+(i*25));
			line(436,554+(i*25),446,554+(i*25));
			
			line(536,329+(i*25),546,329+(i*25));
			line(536,554+(i*25),546,554+(i*25));
			line(598,329+(i*25),608,329+(i*25));
			line(598,554+(i*25),608,554+(i*25));
		}
		for(let i=0;i<18;i++){
			strokeWeight(1);
			line(374,341+(i*25),446,341+(i*25));
			line(536,341+(i*25),608,341+(i*25));
		}
	}
	//señales de funcionamiento
	if((vis_num==1)||(vis_num==2)){
		if(is_otros){
			fill('red');
			strokeWeight(3);
			ellipse(650, 330, 50, 50);
		}else{
			fill('rgb(165,75,75)');
			strokeWeight(3);
			ellipse(650, 330, 50, 50);
		}
		if(is_serie){
			fill('rgb(100,225,40)');
			strokeWeight(3);
			ellipse(750, 330, 50, 50);
		}else{
			fill('rgb(60,80,50)');
			strokeWeight(3);
			ellipse(750, 330, 50, 50);
		}
		if(is_paralelo){
			fill('rgb(100,225,40)');
			strokeWeight(3);
			ellipse(850, 330, 50, 50);
		}else{
			fill('rgb(60,80,50)');
			strokeWeight(3);
			ellipse(850, 330, 50, 50);
		}
		fill(0);
		textSize(12);
		text('INVÁLIDO', 650, 380);
		text('SERIE', 750, 380);
		text('PARALELO',850,380);
	}
	if(is_serie){
		//Selección de la rugosidad
		if(is_rug1){
			fill('red');
			strokeWeight(1);
			rect(80, 850 , 40, 40);
			fill('rgb(165,75,75)');
			rect(170, 850 , 40, 40);
			rect(260, 850 , 40, 40);
			rect(350, 850 , 40, 40);
		}else if(is_rug2){
			fill('red');
			strokeWeight(1);
			rect(170, 850 , 40, 40);
			fill('rgb(165,75,75)');
			rect(80, 850 , 40, 40);
			rect(260, 850 , 40, 40);
			rect(350, 850 , 40, 40);
		}else if(is_rug3){
			fill('red');
			strokeWeight(1);
			rect(260, 850 , 40, 40);
			fill('rgb(165,75,75)');
			rect(80, 850 , 40, 40);
			rect(170, 850 , 40, 40);
			rect(350, 850 , 40, 40);
		}else if(is_rug4){
			fill('red');
			strokeWeight(1);
			rect(350, 850 , 40, 40);
			fill('rgb(165,75,75)');
			rect(80, 850 , 40, 40);
			rect(170, 850 , 40, 40);
			rect(260, 850 , 40, 40);
		}
		fill(0);
		textSize(14);
		text('Mat. 1', 145, 870);
		text('Mat. 2', 235, 870);
		text('Mat. 3', 325, 870);
		text('Mat. 4', 415, 870);
	}
}
























