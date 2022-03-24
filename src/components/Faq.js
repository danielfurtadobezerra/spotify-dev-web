// Ana alice
import './Faq.css';

function Faq(){
    return(
        <>
<div className="fundo-suporte">
  <div className="showcase-container">
    <table>
      <tbody><tr>
          <th>
            <h1>Não lembro minhas informações de login</h1>
          </th>
          <th>
            <h1>Ajuda com pagamento não efetuado</h1>
          </th>
          <th>
            <h1>Problemas no pagamento recorrente?</h1>
          </th>
        </tr>
        <tr>
          <td> você não se lembrar da sua senha, use a página de redefinição de senha.<br /><br />
            Se não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de senha
            e<br />
            insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço
            <br />
            registrado no Spotify for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição
            <br />
            de senha foi enviado.<br /><br />
            Observação: existem várias maneiras de criar uma conta: usando um e-mail, um número de
            telefone,<br />
            o Facebook,a Apple ou o Google. Tente fazer login usando essas opções para localizar sua conta.
          </td>
          <td>Observação: se seu plano foi feito com uma empresa parceira (como sua operadora de celular ou
            Internet),<br />
            ela é a responsável pelo seu pagamento.<br /><br />
            Tenha certeza de que a forma de pagamento escolhida tem saldo suficiente e:<br /><br />
            Está registrada no mesmo país da conta do Spotify.<br />
            Não foi cancelada ou venceu.
            Está habilitada para realizar compras internacionais, transações online ou compras recorrentes.
            <br />
            Procure por essas configurações no app do seu banco.
            Também verifique se o banco ou provedor tem suas informações corretas.<br />
            Eles podem verificar sua
            identidade para garantir a segurança, por exemplo, com uma senha, PIN, impressão digital ou
            código<br />
            enviado ao seu dispositivo.
          </td>
          <td>Você não perderá o acesso imediato ao Premium, mesmo se tiver algum problema com o pagamento da
            assinatura<br />
            mensal. Vamos tentar realizar a cobrança novamente nos próximos dias.<br /><br />
            Você pode verificar ou atualizar as informações de pagamento na página da conta, em “Seu
            plano”.: existem <br />
            várias maneiras de criar uma conta: usando um e-mail, um número de telefone, o Facebook, a Apple
            ou o Google.<br />
            Tente fazer login usando essas opções para localizar sua conta.
          </td>
        </tr>
      </tbody></table>
  </div>
</div>

</>
    );
}

export default Faq;