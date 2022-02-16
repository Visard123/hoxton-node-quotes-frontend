import { useState } from "react"

 const [newQuote, setNewQoute] = useState([])
export function AddQuote() {
   
        fetch(`http://localhost:4000/quotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quote: quote,
                
                age: age,
                firstName: firstName,
                lastName: lastName,
                img: img
            })
        }).then(resp => resp.json())
            .then(() => {
                const updatedUser = JSON.parse(JSON.stringify(newQuote))
                updatedUser.push({
                    quote: quote,
                
                    age: age,
                    firstName: firstName,
                    lastName: lastName,
                    img: img
                })
                setNewQoute(updatedUser)
            })

    }

  return (
    <form className="add-quote">
      <label>
        quote <input type="text" name="quote" required />
      </label>
      <label>
        First Name <input type="text" name="firstName" required />
      </label>
      <label>
        Last Name <input type="text" name="lastName" required />
      </label>
      <label>
        Age <input type="number" name="age" required min={0} />
      </label>
      <label>
        Image <input type="url" name="image" required />
      </label>
      <button type="submit"> Submit</button>
    </form>
  );
}
