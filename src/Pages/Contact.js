export default function Contact(){
    return `
    <form action="//formspree.io/banks.012jasmine@gmail.com" method="POST">

        <input type="text" name="firstname" value="First Name" size="50" autofocus>
        <input type="text" name="lastname" value="Last Name" size="50">

        <div><input type="email" name="userEmail" placeholder="your.email@example.com">
          </div>
      
        <textarea name="user_message" rows="8" cols="40"></textarea>
        <input type="submit">
      </form>
`;
}
