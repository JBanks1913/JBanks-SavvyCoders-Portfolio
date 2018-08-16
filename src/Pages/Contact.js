export default function Contact(){
    return `

  <body>
      <h1>
          Hi! I'm Jasmine. St. Louis native. Formerly an intern for FleishmanHillard, and now a Contract 
          Graphic Designer at Nature's Variety with some coding skills.
      </h1>
        <h3>
          Fill in the spaces below and let's make magic.
        </h3>

        <form action="//formspree.io/banks.012jasmine@gmail.com" method="POST">

            <input type="text" name="firstname" value="First Name" size="50" autofocus>
            <input type="text" name="lastname" value="Last Name" size="50">


            <div><input type="email" name="userEmail" placeholder="your.email@example.com">
              </div>
          

            <textarea name="user_message" rows="8" cols="40" placeholder="Message"></textarea>
            <input type="submit">
          </form>

          <div id="space">
          </div>

      
    </body>
`;
}
