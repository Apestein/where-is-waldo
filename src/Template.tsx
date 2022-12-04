import React from "react"

function Template(props: any) {
  const { map, checkLocation } = props
  return (
    <template>
      {map === "the-loc-nar" ? (
        <>
          <button onClick={checkLocation}>Bowser</button>
          <button onClick={checkLocation}>Yubaba</button>
          <button onClick={checkLocation}>The Knight</button>
        </>
      ) : (
        <>
          <button onClick={checkLocation}>Cacodemon</button>
          <button onClick={checkLocation}>Bill Cipher</button>
          <button onClick={checkLocation}>Courage</button>
        </>
      )}
    </template>
  )
}

export default Template
