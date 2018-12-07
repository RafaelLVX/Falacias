/*
	# Falácias Falaciosas
	Copyright 2018 Miniagência Ltda.
	Contato: rafael@miniagencia.com.br

	AVISO: Partes desse programa são Copyright Apache Foundation e Copyright jQuery Foundation, conforme sinalizado em seus respectivos arquivos.

	Falácias Falaciosas é software livre, nos termos da Licença Pública Geral Affero GNU. Você pode acessar o código-fonte completo deste programa em https://github.com/RafaelLVX/Falacias. As informações em português estão disponíveis para sua referência, mas os avisos legais estão em inglês, conforme as regras em https://www.gnu.org/licenses/translations.html.

	AVISO 2: As imagens neste programa não são software livre. Você pode usar o código-fonte deste programa nos termos de cada licença sinalizada no respectivo arquivo. As imagens foram licenciadas individualmente para uso neste pacote e não podem ser reproduzidas sem autorização explícita dos respectivos detentores do direito autoral.

	This file is part of Falácias Falaciosas.

    Falácias Falaciosas is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Falácias Falaciosas is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Falácias Falaciosas.  If not, see <https://www.gnu.org/licenses/>.
*/
var app = {

	// Application Constructor
	initialize: function() {
	document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	onDeviceReady: function() {
		//Não sei o que isso faz, sinceramente. Me processe.
		this.receivedEvent('deviceready');
	},

	receivedEvent: function(id) {
		//Inicialização manual do menu por não estar dentro de uma página
		$( "body>[data-role='panel']" ).panel();
		$( "[data-role='listview']" ).listview();

		//Reseta as cores das páginas e animação do conteúdo
		$( "[data-role='listview']>li>a" ).click(function(){
			//ID da página selecionada:
			var hrefid = $(this).attr('href');
			//Reseta as cores das páginas
			$( hrefid ).css("background-color", "rgb(249, 249, 249)");
			$( "#argumentofalso, #premissafalsa" ).css("background-color", "tomato");
			// Apaga todos os elementos da página selecionada, pra exibi-los em fadein um por um
			$(	hrefid + ">[role='main']>img, " +
				hrefid + ">[role='main']>h2, " +
				hrefid + ">[role='main']>h3, " +
				hrefid + ">[role='main']>ul, " +
				hrefid + ">[role='main']>p" ).hide();
			$( hrefid + ">[role='main']>img" ).not(".icone").delay(200).fadeIn(500);
			$( hrefid + ">[role='main']>h2" ).delay(400).fadeIn(500);
			$( hrefid + ">[role='main']>h3" ).delay(600).fadeIn(500);
			$( hrefid + ">[role='main']>ul," + hrefid + ">[role='main']>p," + hrefid + ">[role='main']>.icone").delay(800).fadeIn(500);
		});
		
		//Cartões mudando de cor
		$(".cartao-vermelho").click(function(){ 
			$(this.parentElement.parentElement.parentElement).css("background-color", "tomato");
		});
		$(".cartao-amarelo").click(function(){
			$(this.parentElement.parentElement.parentElement).css("background-color", "gold");
		});
		$(".cartao-branco").click(function(){
			$(this.parentElement.parentElement.parentElement).css("background-color", "rgb(249, 249, 249)");
		});

		//Log do deviceready?
		console.log('Received Event: ' + id);
	}
};

app.initialize();