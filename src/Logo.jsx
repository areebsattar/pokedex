
export default function Logo( {appName} ) {
  return (
    <>
      <header>
        <h1>Welcome to the {appName}</h1>
        <img onClick={LogWhenClicked} src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png" />
      </header>
    </>
  );
}

function LogWhenClicked() {
  console.log("You just clicked me");
}
