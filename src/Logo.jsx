
export default function Logo( {appName, LogWhenClicked} ) {
  return (
    <>
      <header>
        <h1>Welcome to the {appName}</h1>
        <img onClick={LogWhenClicked} src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png" />
      </header>
    </>
  );
}

