<?php
//Variáveis
 
//$primeiroNome = $_POST['first-name'];
//$sobrenome = $_POST['last-name'];
//$nome = $primeiroNome . " " . $sobrenome;
$nome = $_POST['first-name'];
$email = $_POST['email'];
$telefone = $_POST['phone'];
$local = $_POST['local'];
$assunto = $_POST['assunto'];
$ambiente = $_POST['ambiente'];
$area = $_POST['area'];
$msg = $_POST['message'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

// Compo E-mail
  $arquivo = "
  <html>
<head>
  <style type='text/css'>
    h1{
      font-size: 30px;
      color: #020202;
      text-transform: uppercase;
      font-weight: 300;
      text-align: center;
      margin-bottom: 15px;
    }
    p{
      padding-left: 15px;
    }
    table{
      width:100%;
      table-layout:fixed;     
    }
    .tbl-content{
      height:400px; /*Altura do display da tabela*/
      overflow-x:auto;
      margin-top: 0px;
      border: 1px solid rgba(6,6,6,0.2);
    }
     td{
      padding: 10px;
      padding-left:15px;
      text-align: left;
      vertical-align:middle;
      font-weight: 300;
      font-size: 15px;
      color: #000;
      border-bottom: solid 1px rgba(6,6,6,0.1);
    }
    /* demo styles */
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
    body{  
      font-family: 'Roboto', sans-serif;
    }
    section{
      margin: 65px;
    }
  </style>
  </head>
  <body>
      <section>
        <h1>Relta - Contato pelo Site</h1>
        <p>$nome - $email</p>
        <div class='tbl-header'>
          <table cellpadding='0' cellspacing='0' border='0'>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        <div class='tbl-content'>
          <table cellpadding='0' cellspacing='0' border='0'>
            <tbody>
              <tr>
                <td width='17%'><b>Nome:</b></td>
                <td>$nome</td>
              </tr>
              <tr>
                <td><b>E-mail:</b></td>
                <td>$email</td>
              </tr>
              <tr>
                <td><b>Telefone:</b></td>
                <td>$telefone</td>
              </tr>
              <tr>
                <td><b>Local:</b></td>
                <td>$local</td>
              </tr>
              <tr>
                <td><b>Assunto:</b></td>
                <td>$assunto</td>
              </tr>
              <tr>
                <td><b>Ambiente:</b></td>
                <td>$ambiente</td>
              </tr>
              <tr>
                <td><b>Área:</b></td>
                <td>$area</td>
              </tr>
              <tr>
              <td><b>Mensagem:</b></td>
              <td>$msg</td>
            </tr>
            </tbody>
          </table>
          <p>Este e-mail foi Enviado em: <b>$data_envio</b> às <b>$hora_envio .</b></p>
        </div>
      </section>
      </body>
    </html>
  ";
  //Layout Enviado Sucesso 
  $enviado_sucesso = "
    <html>
    <head>
      <meta http-equiv='refresh' content='10;URL=index.php'>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/css/uikit.min.css' />
    </head>
    <body>
      <div>
        <div class='uk-card uk-card-primary uk-card-hover uk-card-body uk-light'>
            <h3 class='uk-card-title'><span class='uk-margin-small-right' uk-icon='check'></span>E-mail enviado com sucesso!!!</h3>
            <p>Agradecemos a preferência. Em breve entraremos em contato.</p>
            <p>Clique no <b>X</b> para fechar.</p>
            <p>Equipe Relta</p>
        </div>
      </div>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit-icons.min.js'></script>
    </body>
    </html>
  ";

  //Layout Erro enviar 
  $erro_enviar = "
    <html>
    <head>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/css/uikit.min.css' />
    </head>
    <body>
      <div class='uk-alert-danger' uk-alert>
        <a class='uk-alert-close' uk-close></a>
        <p>ERRO AO ENVIAR E-MAIL! </br> Tente novamente.</p>
      </div>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit-icons.min.js'></script>
    </body>
    </html>
  ";
//enviar
   
  // emails para quem será enviado o formulário raquel@relta.com.br
  $emailenviar = "omarcosta152@gmail.com";
  $destino = $emailenviar;
  $assunto = "Contato pelo Site";
  $nomeContato = $nome;
  $emailContato = $email; 
 
  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= "'From:'.$nome.'<'.$email.'>'";
  //$headers .= "Bcc: $EmailPadrao\r\n";
   
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  echo "$enviado_sucesso";
  } else {
  echo "$erro_enviar";
  }
?>