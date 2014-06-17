function gGbl1_SelloAMIPCI() { newWindow = window.open('https://www.sellosdeconfianza.org.mx/MuestraCertificado.php?NUMERO_SERIE=JW88y', 'Certificado', 'width=500,height=616,left=150,top=70,toolbar=0,menuBar=0,scrollBars=0 resizable=0'); newWindow.focus(); }

function A_LigaPopupClienteEstadoNorte() { var objPopup = window.open("/Secciones/Popups/avisoPromoEstadosDelNorte.aspx", "clienteNorte", "width=450,height=240,scrollbars=0,status=no,toolbar=no,menubar=no,location=no"); objPopup.focus(); objPopup = null; }


//*** 100128 - JCV Se agrega funcion para ligas en banners ***//
function A_Modelos(strmodelo){
	var strLiga = "/Modelo/"+strmodelo;
	location.href = strLiga;
};
function A_ProcesaClave(strClave) {
	//alert("clave = "+strClave);
	switch(strClave){
		case "PAG_PROMOS":
			//var strLiga = "Seccion.aspx?strClv=Promociones";
			var strLiga = "/Promociones";
			location.href = strLiga;
		break;
		case "PAG_PRODUCTOS":
			//var strLiga = "Seccion.aspx?strClv=Productos";
			var strLiga = "/Productos";
			location.href = strLiga;
		break;
		case "CONTROL_CASUAL":
			//var strLiga = "Seccion.aspx?strClv=Productos";
			var strLiga = "/Productos/Casual_Control";
			location.href = strLiga;
		break;		
		case "PAG_BLOG":
			var strLiga = "/App/Blog/post/Resultados-Momentos-Ilusion.aspx";
			location.href = strLiga;
		break;
		case "PAG_CAMPANA":
			var strLiga = "Seccion.aspx?strClv=Nov_Campanas";
			location.href = strLiga;
		break;
		case "PAG_COMPRA":
			var strLiga = "Entrada.aspx";
			location.href = strLiga;
		break;
		case "BRILLA":
			var strLiga = "/App/Seccion.aspx?strClv=BCI_Intro";
			location.href = strLiga;
		break;
		case "TARJETA_BRILLA":
			//var strLiga = "/App/Seccion.aspx?strClv=BCI_Tarjeta";
			var strLiga = "/Brilla_con_Ilusion/Tarjeta_Brilla_con_Ilusion";
			location.href = strLiga;
		break;
		case "CATOFER_CEN_VER":
			A_LigaCatOfertas('centro');
		break;
		case "CATOFER_NOR_VER":
			A_LigaCatOfertas('norte');
		break;
		case "CATOFER_SUR_VER":
			A_LigaCatOfertas('sur');
		break;
		case "CATOFER_CEN_DES":
			strLiga = "/img/sec/CatalogosOfertas/centro.pdf";
			window.open(strLiga,'catofertascentro');
		break;
		case "CATOFER_NOR_DES":
			strLiga = "/img/sec/CatalogosOfertas/norte.pdf";
			window.open(strLiga,"catofertasnorte");
		break;
		case "CATOFER_SUR_DES":
			strLiga = "/img/sec/CatalogosOfertas/sur.pdf";
			window.open(strLiga,"catofertassur");
		break;

		case "CAT_SUP_AMOR_VER":
			A_LigaSuplementoAmor();
		break;
		case "CAT_SUP_AMOR_DES":
			strLiga = "/img/sec/SanValentin/suplemento.pdf";
			window.open(strLiga,'suplementoamor');
		break;
		case "CAT_SUP_COLOR_VER":
			A_LigaSuplementoSol_Color();
		break;
		case "CAT_SUP_COLOR_DES":
			strLiga = "/img/sec/SolColor/suplemento.pdf";
			window.open(strLiga,'suplementosol_color');
		break;

		case "MINICAT_COS_VER":
			A_LigaMiniCatCosmeticos();
		break;
		case "MINICAT_COS_DES":
			strLiga = "/img/sec/MiniCatCosmeticos/Minicatalogo-Cosmeticos.pdf";
			window.open(strLiga,'minicatcosmeticos');
		break;

		case "CAT_VAC_VER":
			A_LigaCatVacaciones();
		break;
		case "CAT_VAC_DES":
			strLiga = "/img/sec/CatVacaciones/catalogo-vacaciones.pdf";
			window.open(strLiga,'catvacaciones');
		break;
		case "CAT_DIAMADRES_VER":
			A_LigaCatDiaMadresMEX();
		break;
		case "CAT_DIAMADRES_DES":
			strLiga = "/img/sec/CatMadres/cat-diamadres.pdf";
			window.open(strLiga,'catdiamadres');
		break;
		case "SUP_ANIVERSARIO_VER":
			A_LigaSuplementoAniversario();
		break;
		case "SUP_ANIVERSARIO_DES":
			strLiga = "/img/sec/SuplementoRegresoClases/sup-aniversario.pdf";
			window.open(strLiga,'suplementoaniversario');
		break;
		case "SUP_REGRESOCLASES_VER":
			A_LigaSuplementoRegresoClases();
		break;
		case "SUP_REGRESOCLASES_DES":
			strLiga = "/img/sec/supregresoclases/sup-regresoclases.pdf";
			window.open(strLiga,'supregresoclases');
		break;

		case "SUP_MESPATRIO_VER":
			A_LigaSuplementoMesPatrio();
		break;
		case "SUP_MESPATRIO_DES":
			strLiga = "/img/sec/SuplementoMesPatrio/suplemento-mespatrio.pdf";
			window.open(strLiga,'supmespatrio');
		break;
		case "MINICAT_HOG_VER":
			A_LigaMiniHogar();
		break;
		case "MINICAT_HOG_DES":
			strLiga = "/img/sec/MiniCatHogar/minicatalogo-hogar.pdf";
			window.open(strLiga,'minicathogar');
		break;
		case "SUP_ROSA_VER":
			A_LigaSuplementoRosa();
		break;
		case "SUP_ROSA_DES":
			strLiga = "/img/sec/SuplementoRosa/suplemento-rosa.pdf";
			window.open(strLiga,'suprosa');
		break;
		case "REV_NAV_VER":
			A_LigaRevistaNavidena();
		break;
		case "SUP_CORHOG_VER":
			A_LigaSuplementoCortinasHogar();
		break;
		case "SUP_CORHOG_DES":
			strLiga = "/img/sec/SuplementoCortinasHogar/Suplemento-hogar.pdf";
			window.open(strLiga,'suprosa');
		break;
		case "MICROSITIO_BUENFIN":
			A_LigaMicSitio();
		break;
		case "CAT_OFER_CENTRO_VER":
			A_LigaCatOferCentro();
		break;
		case "CATOFER_CENTRO_DES":
			strLiga = "/img/sec/CatalogosOfertas2013/Centro.pdf";
			window.open(strLiga,'catofer');
		break;
		case "CATOFER_NORTE_DES":
			strLiga = "/img/sec/CatalogosOfertas2013/Norte.pdf";
			window.open(strLiga,'catofer');
		break;
		case "CATAOFER_SUR_DES":
			strLiga = "/img/sec/CatalogosOfertas2013/Sur.pdf";
			window.open(strLiga,'catofer');
		break;
		case "MINICAT_COSM_VER":
			A_LigaMinCatCosmeticos();
		break;
		case "MINICAT_COSM_DES":
			strLiga = "/img/sec/MiniCatCosmeticos2013/Minicatalogo-Cosmeticos.pdf";
			window.open(strLiga,'minicatcosmeticos');
		break;
		case "TRIP_COS_VER":
			A_LigaTripticoCosmeticos();
		break;
		case "TRIP_COS_DES":
			strLiga = "/img/sec/TripticoCosmeticos/Cosmeticos.pdf";
			window.open(strLiga,'minicatcosmeticos');
		break;
		case "SUP_AYA_VER":
			A_LigaSupAmorAmistad();
		break;
		case "SUP_AYA_DES":
			strLiga = "/img/sec/AmorAmistad/suplemento.pdf";
			window.open(strLiga,'AmorAmistad');
		break;
		case "SUP_PLAYA_VER":
			A_LigaSupPlaya();
		break;
		case "SUP_PLAYA_DES":
			strLiga = "/img/sec/SuplementoPlaya/suplemento.pdf";
			window.open(strLiga,'AmorAmistad');
		break;
		case "REV_FAM_VER":
			A_LigaRevFamiliar();
		break;
		case "REV_FAM_DES":
			strLiga = "/img/sec/RevistaFamiliar/suplemento.pdf";
			window.open(strLiga,'AmorAmistad');
		break;
		case "MIN_COS_VER":
			A_LigaMinCosmeticos();
		break;
		case "MIN_COS_DES":
			strLiga = "/img/sec/MinicatalogoCosmeticos/catalogo.pdf";
			window.open(strLiga,'AmorAmistad');
		break;
		case "SUP_MILU_VER":
			A_LigaSupMesIlusion();
		break;
		case "SUP_MILU_DES":
			strLiga = "/img/sec/MesIlusion/suplemento.pdf";
			window.open(strLiga,'Mesilusion');
		break;
		case "SUP_MICC_VER":
			A_LigaMinCatCosm2013();
		break;
		case "SUP_MICC_DES":
			strLiga = "/img/sec/MinCatalogoCosmeticos/suplemento.pdf";
			window.open(strLiga,'Mesilusion');
		break;
		case "SUP_MILU_DES":
			strLiga = "/img/sec/MesIlusion/suplemento.pdf";
			window.open(strLiga,'Mesilusion');
		break;
		case "CAT_OFERTASN_VER":
			A_LigaCatOfertasN2013();
		break;
		case "CAT_OFERTASN_DES":
			strLiga = "/img/sec/CatOfertas/catalogo-ofertas-norte.pdf";
			window.open(strLiga,'ofertas');
		break;
		case "CAT_OFERTAS_VER":
			A_LigaCatOfertas2013();
		break;
		case "CAT_OFERTAS_DES":
			strLiga = "/img/sec/CatOfertas/catalogo-ofertas-centro.pdf";
			window.open(strLiga,'ofertas');
		break;	
		case "CAT_OFERTASS_VER":
			A_LigaCatOfertasS2013();
		break;
		case "CAT_OFERTASS_DES":
			strLiga = "/img/sec/CatOfertas/catalogo-ofertas-sur.pdf";
			window.open(strLiga,'regresaclases');
		break;
		case "SUP_REGCLAS_VER":
			A_LigaSupRegClases2013();
		break;
		case "SUP_REGCLAS_DES":
			strLiga = "/img/sec/RegresoClases/suplemento.pdf";
			window.open(strLiga,'regresaclases');
		break;
		case "MINCAT_COS_VER":
			A_LigaMinCatCosme2013();
		break;
		case "MINCAT_COS_DES":
			strLiga = "/img/sec/MiniCatCosmeticos/catalogo.pdf";
			window.open(strLiga,'regresaclases');
		break;
		case "MINCAT_HOG_VER":
			A_LigaMinCatHog2013();
		break;
		case "MINCAT_HOG_DES":
			strLiga = "/img/sec/MiniCatHogar/catalogo.pdf";
			window.open(strLiga,'regresaclases');
		break;	
		case "CATCOM_VER":
			A_LigaMasCatalogoCompromiso();
		break;
		case "TIENDA_MOVIL":
			A_LigaTiendaMovil();
		break;
		case "PREV_CAN_VER":
			A_LigaAutoexplora();
		break;
		case "POP_PROMO_MEX":
			A_LigaPop_MEX();
		break;
		case "POP_PROMO1_MEX":
			A_LigaPop1_MEX();
		break;

/* === CLAVES PARA SITIO USA ===*/

		case "CATOFERUS_VER":
			A_LigaCatOfertasUSA();
		break;
		case "CATOFERUS_DES":
			strLiga = "/img/sec/Catalogo-Ofertas/catalogo.pdf";
			window.open(strLiga,"catofertas");
		break;
		case "MSIT_CURVAS":
			A_LigaMinisitioCurvas();
		break;
		case "CATUS_SUP_AMOR_VER":
			A_LigaSuplementoAmorUSA();
		break;
		case "CATUS_SUP_AMOR_DES":
			strLiga = "/img/sec/SuplementoAmor/suplemento-amor.pdf";
			window.open(strLiga,'suplementoamor');
		break;
		case "POP_SPRING_SALE":
			A_LigaPopSpringSale();
		break;
		case "CATMADRES_US_VER":
			A_LigaCatDiaMadres();
		break;
		case "CATMADRES_US_DES":
			strLiga = "/img/sec/CatDiaMadres/cat-diamadres.pdf";
			window.open(strLiga,'catalogodiamadres');
		break;
		case "US_SUPVERANO_VER":
			A_LigaPopSupVerano();
		break;
		case "US_SUPVERANO_DES":
			strLiga = "/img/sec/SuplementoVerano/suplemento-verano.pdf";
			window.open(strLiga,'supverano');
		break;
		case "US_SUPCURVAS_VER":
			A_LigaPopSupCurvas();
		break;
		case "US_SUPCURVAS_DES":
			strLiga = "/img/sec/SuplementoCurvas/celebra-tus-curvas.pdf";
			window.open(strLiga,'supcurvas');
		break;
		case "US_REVNAV_VER":
			A_LigaRevistaNavidenaUSA();
		break;
		case "US_REVNAV_DES":
			strLiga = "/img/sec/RevistaNavidena/revista-navidena.pdf";
			window.open(strLiga,'supcurvas');
		break;
		case "POP_BIENVENIDO_OTONO":
			A_LigaPopBienvenidoOtono();
		break;
		case "POP_PROMO1":
			A_LigaPop_Promo1();
		break;
		case "CAT_OFERUS_VER":
			A_LigaCatOferUSA();
		break;
		case "CAT_OFERUS_DES":
			strLiga = "/img/sec/CatalogoOfertas/catalogo.pdf";
			window.open(strLiga,"catofertas");
		break;
		case "NUEVOS_CAT":
			EjecutaBusquedaCatalogo();
		break;
		case "SAN_PATRICIO":
			A_LigaSanPatricio();
		break;
		case "SemAnual_Sale_VER":
			A_LigaSemiannualSale();
		break;
		case "SemAnual_Sale_DES":
			strLiga = "/img/sec/SemAnual/suplemento.pdf";
			window.open(strLiga,"catofertas");
		break;
		case "PAQLAN_USA":
			A_LigaPaq_lanza_USA();
		break;		
		case "TIENDA_MOVIL_USA":
			A_LigaTiendaMovil_USA();
		break;

/* === CLAVES PARA SITIO CENTROAMERICA ===*/
		case "SUP_GUA_MADRES_VER":
			  A_LigaSupDiaMadresGUA();
		break;
		case "SUP_GUA_MADRES_DES":
			strLiga = "/img/sec/SuplementoDiaMadres/suplemento-diamadres-guatemala.pdf";
			window.open(strLiga,'suplementodiamadresguatemala');
		break;
		case "SUP_SAL_MADRES_VER":
			  A_LigaSupDiaMadresSAL();
		break;
		case "SUP_SAL_MADRES_DES":
			strLiga = "/img/sec/SuplementoDiaMadres/suplemento-diamadres-elsalvador.pdf";
			window.open(strLiga,'suplementodiamadreselsalvador');
		break;
		case "SUP_COL_MADRES_VER":
			  A_LigaSupDiaMadresCOL();
		break;
		case "SUP_COL_MADRES_DES":
			strLiga = "/img/sec/SuplementoDiaMadres/suplemento-diamadres-colombia.pdf";
			window.open(strLiga,'suplementodiamadrescolombia');
		break;
		case "SUP_GUA_OFERTAS_VER":
			  A_LigaSupOfertasGUA();
		break;
		case "SUP_GUA_OFERTAS_DES":
			strLiga = "/img/sec/SuplementoOfertas/ofertas-guatemala.pdf";
			window.open(strLiga,'suplementoofertasguatemala');
		break;
		case "SUP_SAL_OFERTAS_VER":
			  A_LigaSupOfertasSAL();
		break;
		case "SUP_SAL_OFERTAS_DES":
			strLiga = "/img/sec/SuplementoOfertas/ofertas-elsalvador.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "SUP_PREGUA_DES":
			strLiga = "/img/sec/Premios/catalogo-premios-guatemala.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "SUP_PREGUA_VER":
			A_LigaPremiosGUA();
		break;
		case "SUP_PRESAL_VER":
			A_LigaPremiosSAL();
		break;
		case "SUP_PRESAL_DES":
			strLiga = "/img/sec/Premios/catalogo-premios-ElSalvador.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "CATOFER_SAL_DES":
			strLiga = "/img/sec/CatalogosOfertas/catalogo-ofertas-elSalvador.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "CATOFER_GUA_DES":
			strLiga = "/img/sec/CatalogosOfertas/catalogo-ofertas-guatemala.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "CATOFER_HON_DES":
			strLiga = "/img/sec/CatalogosOfertas/catalogo-ofertas-honduras.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "SUP_MAES_VER":
			A_LigaSupMadresSAL();
		break;
		case "SUP_MAGT_VER":
			A_LigaSupMadresGUA();
		break;
		case "SUP_MAHN_VER":
			A_LigaSupMadresHON();
		break;
		case "SUP_MAES_DES":
			strLiga = "/img/sec/SupDiaMadres/Suplemento-dia-madres-el-salvador.pdf";
			window.open(strLiga,'suplementomadreselsalvador');
		break;
		case "SUP_MAGT_DES":
			strLiga = "/img/sec/SupDiaMadres/Suplemento-dia-madres-guatemala.pdf";
			window.open(strLiga,'suplementomadresguatemala');
		break;
		case "SUP_MAHN_DES":
			strLiga = "/img/sec/SupDiaMadres/Suplemento-dia-madres-honduras.pdf";
			window.open(strLiga,'suplementomadresonduras');
		break;
		case "CAT_OFEG_VER":
			A_LigaCatOferGt();
		break;
		case "CAT_OFEG_DES":
			strLiga = "/img/sec/CatalogoOfertas/catalogo-ofertas-guatemala.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "CAT_OFEES_VER":
			A_LigaCatOferSal();
		break;
		case "CAT_OFEES_DES":
			strLiga = "/img/sec/CatalogoOfertas/catalogo-ofertas-el-salvador.pdf";
			window.open(strLiga,'suplementooferatselsalvador');
		break;
		case "CAT_NAV_VER":
			A_LigaCatNav();
		break;
		case "CAT_NAV_DES":
			strLiga = "/img/sec/IlusionNavidad/catalogo.pdf";
			window.open(strLiga,'IlusionNavidad');
		break;
		case "CAT_NGU_VER":
			A_LigaCatNavGua();
		break;
		case "CAT_NGU_DES":
			strLiga = "/img/sec/CatalogoNavidad/catalogo.pdf";
			window.open(strLiga,'IlusionNavidad');
		break;	
		case "CAT_NSA_VER":
			A_LigaCatNavSal();
		break;
		case "CAT_NSA_DES":
			strLiga = "/img/sec/CatalogoNavidad/catalogo.pdf";
			window.open(strLiga,'IlusionNavidad');
		break;			
		case "CAT_OFER_CA_VER":
			A_LigaCatOferCos();
		break;
		case "CAT_OFER_CA_DES":
			strLiga = "/img/sec/CatalogoOfertas/catalogo.pdf";
			window.open(strLiga,'IlusionNavidad');
		break;
		case "POP_PROMO1_GUA":
			A_LigaPop_GUA();
		break;
		case "POP_PROMO1_HON":
			A_LigaPop_HON();
		break;
		case "POP_PROMO1_SAL":
			A_LigaPop_SAL();
		break;	
	}
}



//*** FUNCIONES PARA POPUPS - MEXICO ***//

function A_LigaCatOfertas(strRegion){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas-"+strRegion+".asp", "catofertas", "width=800,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaSuplementoAmor(){
	var objPopup = window.open("/Secciones/Popups/suplemento-san-valentin.asp", "suplementoamor", "width=800,height=670,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSuplementoSol_Color(){
	var objPopup = window.open("/Secciones/Popups/suplemento-sol-color.asp", "suplementoamor", "width=800,height=690,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMiniCatCosmeticos(){
	var objPopup = window.open("/Secciones/Popups/minicat-cosmeticos.asp", "minicatcosmeticos", "width=800,height=670,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaCatVacaciones(){
	var objPopup = window.open("/Secciones/Popups/cat-vacaciones.asp", "catvacaciones", "width=980,height=600,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaCatDiaMadresMEX(){
	var objPopup = window.open("/Secciones/Popups/cat-diamadres.asp", "catdiamadres", "width=980,height=600,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaSuplementoAniversario(){
	var objPopup = window.open("/Secciones/Popups/suplemento-aniversario.asp", "supaniversario", "width=440,height=634,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSuplementoRegresoClases(){
	var objPopup = window.open("/Secciones/Popups/suplemento-regresoclases.asp", "supregresoclases", "width=800,height=670,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}


function A_LigaSuplementoMesPatrio(){
	var objPopup = window.open("/Secciones/Popups/suplemento-mespatrio.asp", "supmespatrio", "width=800,height=660,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaMiniHogar(){
	/*var objPopup = window.open("/Secciones/Popups/minicat-hogar.asp", "minicathogar", "width=879,height=668,scrollbars=0");*/
	var objPopup = window.open("/Secciones/Popups/minicat-hogar.asp", "minicathogar", "width=830,height=700,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaSuplementoRosa(){
	var objPopup = window.open("/Secciones/Popups/suplemento-rosa.asp", "suprosa", "width=800,height=680,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaRevistaNavidena(){
	var objPopup = window.open("/Secciones/Popups/revista-nav.aspx", "revnav", "width=900,height=693,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSuplementoCortinasHogar(){
	var objPopup = window.open("/Secciones/Popups/suplemento-cortinas-hogar.asp", "supcorhog", "width=805,height=675,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMicSitioTFisica(){
	var objPopup = window.open("/Secciones/Popups/Tienda-Fisica.asp", "tfisica", "width=800,height=675,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMicSitioTOnline(){
	var objPopup = window.open("/Secciones/Popups/Tienda-Online.asp", "tonline", "width=800,height=675,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMicSitio(){
	var objPopup = window.open("/Secciones/Popups/MicroSitio-BuenFin.asp", "tonline", "width=800,height=600,scroll=0,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOferCentro(){
	var objPopup = window.open("/Secciones/Popups/CatalogoOfertas-Centro.asp", "catofercen", "width=880,height=675,scroll=0,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMinCatCosmeticos(){
	var objPopup = window.open("/Secciones/Popups/minicatalogo-cosmeticos.asp", "minicatcosmeticos", "width=880,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaTripticoCosmeticos(){
	var objPopup = window.open("/Secciones/Popups/triptico-cosmeticos.asp", "tripticocosmeticos", "width=880,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupAmorAmistad(){
	var objPopup = window.open("/Secciones/Popups/sup-amor-y-amistad.asp", "AmoryAmistad", "width=762,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupPlaya(){
	var objPopup = window.open("/Secciones/Popups/sup-playa.asp", "playa", "width=800,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaRevFamiliar(){
	var objPopup = window.open("/Secciones/Popups/revista-familiar.asp", "revistafamiliar", "width=880,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMinCosmeticos(){
	var objPopup = window.open("/Secciones/Popups/minicatalog-cosmeticos.asp", "revistafamiliar", "width=970,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupMesIlusion(){
	var objPopup = window.open("/Secciones/Popups/sup-mes-ilusion.asp", "Mesilusion", "width=794,height=682,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMinCatCosm2013(){
	var objPopup = window.open("/Secciones/Popups/min-cat-cosmeticos.asp", "cosmeticos", "width=992,height=697,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOfertasN2013(){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas-norte.asp", "cosmeticos", "width=932,height=700,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOfertas2013(){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas-centro-occidente.asp", "cosmeticos", "width=932,height=700,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOfertasS2013(){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas-sur.asp", "cosmeticos", "width=932,height=700,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupRegClases2013(){
	var objPopup = window.open("/Secciones/Popups/suplemento-regreso-clases.asp", "cosmeticos", "width=820,height=690,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMinCatCosme2013(){
	var objPopup = window.open("/Secciones/Popups/minicat-cosmeticos-2013.asp", "cosmeticos", "width=800,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}		
function A_LigaMinCatHog2013(){
	var objPopup = window.open("/Secciones/Popups/minicat-hogar-2013.asp", "cosmeticos", "width=882,height=675,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaMasCatalogoCompromiso(){
	var objPopup = window.open("/Secciones/Popups/mas-que-un-catalogo.asp", "cosmeticos", "width=800,height=750,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaTiendaMovil(){
	var objPopup = window.open("/Secciones/Popups/tienda-movil.asp", "tienda", "width=446,height=689,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaAutoexplora(){
	var objPopup = window.open("/Secciones/Popups/autoexplorate.asp", "prevencioncancer", "width=824,height=604,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop_MEX(){
	var objPopup = window.open("/Secciones/Popups/promociones_mex.htm", "Promociones", "width=485,height=732,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop1_MEX(){
	var objPopup = window.open("/Secciones/Popups/promociones1_mex.htm", "Promociones", "width=750,height=485,scroll=0");
	objPopup.focus();
	objPopup = null;
}

//*** FUNCIONES PARA POPUPS - USA ***//
function A_LigaCatOfertasUSA(){
	//alert("ofertas usa");
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas.htm", "catofertas", "width=500,height=732,scrollbars=0, resize: none;");
	objPopup.focus();
	objPopup = null;
}

function A_LigaMinisitioCurvas(){
	var objPopup = window.open("/curvas/", "minisitiocurvas", "width=980,height=670,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaSuplementoAmorUSA(){
	var objPopup = window.open("/Secciones/Popups/suplemento-amor.htm", "suplementoamor", "width=980,height=750,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaPopSpringSale(){
	var objPopup = window.open("/Secciones/Popups/spring-sale.htm", "springsale", "width=800,height=630,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaCatDiaMadres(){
	var objPopup = window.open("/Secciones/Popups/cat-diamadres.htm", "catalogodiamadres", "width=980,height=676,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaPopSupVerano(){
	var objPopup = window.open("/Secciones/Popups/sup-verano.htm", "suplementoverano", "width=800,height=648,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

function A_LigaPopSupCurvas(){
	var objPopup = window.open("/Secciones/Popups/suplemento-curvas.htm", "suplementocurvas", "width=800,height=652,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaRevistaNavidenaUSA(){
	var objPopup = window.open("/Secciones/Popups/revista-nav.asp", "revnav", "width=880,height=675,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPopBienvenidoOtono(){
	var objPopup = window.open("/Secciones/Popups/bienvenido-otono.htm", "otono", "width=487,height=782,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop_Promo1(){
	var objPopup = window.open("/Secciones/Popups/promociones.htm", "Promociones", "width=487,height=750,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOferUSA(){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas.aspx", "otono", "width=800,height=675,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSanPatricio(){
	var objPopup = window.open("/Secciones/Popups/SanPatricio.asp", "otono", "width=487,height=750,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSemiannualSale(){
	var objPopup = window.open("/Secciones/Popups/semiannual-sale.asp", "semiannual", "width=800,height=653,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPaq_lanza_USA(){
	var objPopup = window.open("/Secciones/Popups/paquete-lanzamiento.asp", "cosmeticos", "width=800,height=650,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaTiendaMovil_USA(){
	var objPopup = window.open("/Secciones/Popups/tienda-movil_usa.asp", "tienda", "width=487,height=732,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}

//*** FUNCIONES PARA POPUPS - CENTROAMERICA ***//
function A_LigaSupDiaMadresGUA(){
	var objPopup = window.open("/Secciones/Popups/sup-diamadres-guatemala.htm", "suplementodiamadresgua", "width=440,height=634,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupDiaMadresSAL(){
	var objPopup = window.open("/Secciones/Popups/sup-diamadres-elsalvador.htm", "suplementodiamadressal", "width=440,height=634,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupDiaMadresCOL(){
	var objPopup = window.open("/Secciones/Popups/sup-diamadres-colombia.htm", "suplementodiamadrescol", "width=440,height=634,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupOfertasGUA(){
	var objPopup = window.open("/Secciones/Popups/sup-ofertas-guatemala.htm", "suplementoofertasgua", "width=500,height=734,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupOfertasSAL(){
	var objPopup = window.open("/Secciones/Popups/sup-ofertas-elsalvador.htm", "suplementoofertassal", "width=362,height=711,scrollbars=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPremiosSAL(){
	var objPopup = window.open("/Secciones/Popups/sup-premios-elsalvador.htm", "suplementopremiossal", "width=400,height=660,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPremiosGUA(){
	var objPopup = window.open("/Secciones/Popups/sup-premios-guatemala.htm", "suppremiosgua", "width=400,height=660,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupMadresSAL(){
	var objPopup = window.open("/Secciones/Popups/sup-dia-madres-elsalvador.asp", "supmadressal", "width=936,height=712,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupMadresGUA(){
	var objPopup = window.open("/Secciones/Popups/sup-dia-madres-guatemala.asp", "supmadresgua", "width=936,height=712,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaSupMadresHON(){
	var objPopup = window.open("/Secciones/Popups/sup-dia-madres-honduras.asp", "supmadreshon", "width=936,height=712,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOferGt(){
	var objPopup = window.open("/Secciones/Popups/Catalogo-ofertas-guatemala.asp", "catofertasguatemala", "width=932,height=712,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOferSal(){
	var objPopup = window.open("/Secciones/Popups/Catalogo-ofertas-el-salvador.asp", "catofertaselsalvador", "width=932,height=712,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatNav(){
	var objPopup = window.open("/Secciones/Popups/catalogo-navidad.aspx", "catalogonavidad", "width=800,height=680,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatNavGua(){
	var objPopup = window.open("/Secciones/Popups/catalogo-navidad.aspx", "catalogonavidad", "width=940,height=730,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatNavSal(){
	var objPopup = window.open("/Secciones/Popups/catalogo-navidad.aspx", "catalogonavidad", "width=940,height=730,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaCatOferCos(){
	var objPopup = window.open("/Secciones/Popups/catalogo-ofertas.aspx", "catalogonavidad", "width=800,height=675,scrollbars=0,resizable=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop_GUA(){
	var objPopup = window.open("/Secciones/Popups/promociones_guatemala.htm", "Promociones", "width=485,height=732,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop_HON(){
	var objPopup = window.open("/Secciones/Popups/promociones_honduras.htm", "Promociones", "width=485,height=732,scroll=0");
	objPopup.focus();
	objPopup = null;
}
function A_LigaPop_SAL(){
	var objPopup = window.open("/Secciones/Popups/promociones_salvador.htm", "Promociones", "width=485,height=732,scroll=0");
	objPopup.focus();
	objPopup = null;
}
