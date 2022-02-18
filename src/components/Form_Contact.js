import React from 'react';

const Form_Contact = () => {
    return (
        <div>
             <form>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    Prenom :
    <input type="text" name="name" />
  </label>
  <label>
    Mail :
    <input type="mail" name="name" />
  </label>
  <input type="submit" value="Envoyer" />
</form>
        </div>
    );
};

export default Form_Contact;