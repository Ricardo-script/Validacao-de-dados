
//routes

module.exports = function(app){
    app.get('/chat',function(req,res){
        app.app.controllers.controle.initChat(app,req,res);
    });

    app.post('/chat',function(req,res){
        app.app.controllers.controle.initChat(app,req,res);
    });
}


//controllers

module.exports.index = function(app,req,res){
    res.render('index',{validacao:{}});
}

module.exports.initChat = function(app,req,res){
    var dadosForm = req.body;


    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 á 15 caracteres').len(3,15);

    var erros = req.validationErrors();
    if(erros){
        res.render('index',{validacao:erros});
        return;
    }
    res.render('chat');
}

//index

<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">

		<title>Multiroom Chat</title>
		
		<!-- bootstrap - link cdn -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	
		<!-- estilo -->
		<link href="css/style.css" rel="stylesheet">
	</head>

	<body>

		<div class="container">
            <div class="row vertical-offset-80">
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default">
                    	<div class="panel-heading">                                
                            <div class="row-fluid user-row">
                                <img src="images/multiroom_chat_2.png" class="img-responsive" alt="Multiroom Chat"/>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form accept-charset="UTF-8" role="form" class="form-signin" action="/chat" method="POST">
                                <fieldset>
                                    <label class="panel-login">
                                        <div class="login_result"></div>
                                    </label>
                                    <input class="form-control" placeholder="Nome ou apelido" id="apelido" type="text" name="apelido">
                                    <br></br>
                                    <input class="btn btn-lg btn-success btn-block" type="submit" id="entrar" value="Entrar »">
                                </fieldset>
                            </form>
                        </div>
                    </div>

                    <div>
                        <% if(validacao.length >0){ %>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="alert alert-danger">
                                        <strong>Atenção</strong>
                                        <ul>
                                            <% for(var i=0; i<validacao.length; i++){ %>
                                                <li><%=validacao[i].msg%></li>
                                            <% } %>  
                                        </ul>
                                    </div>
                                </div>
                           </div>
                        <% } %>  
                    </div>

                </div>
            </div>
        </div>
		
	</body>
</html>