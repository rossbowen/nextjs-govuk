async function getFacts(limit: number) {
  const res = await fetch(`https://catfact.ninja/facts?limit=${limit}`, {
    cache: "no-store", // Next.js fetch will cache by default.
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Example of server side rendering with server side data fetching.
export default async function Home() {
  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper" id="main-content" role="main">
        <h1 className="govuk-heading-xl">Hello world!</h1>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <p className="govuk-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dapibus odio sit amet orci efficitur, ut rutrum tortor semper.
              Praesent vestibulum massa nibh, nec blandit felis posuere a. Donec
              vestibulum, nisi sit amet sodales malesuada, enim diam maximus
              lacus, ac sollicitudin ante turpis id dui. Proin tempor aliquam ex
              eu accumsan. Quisque elementum, nisi at dapibus pellentesque, odio
              mauris vehicula metus, sit amet tempus metus tellus sed turpis.
              Nullam at justo maximus, elementum turpis et, aliquam nisl. Nullam
              eget justo tincidunt, rhoncus felis at, pellentesque nibh. Proin
              sed ante quam. Nunc sapien est, rhoncus a dui et, tincidunt
              porttitor metus.
            </p>
          </div>
          <div className="govuk-grid-column-one-third">
            <p className="govuk-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              recusandae! Illum eligendi totam sapiente exercitationem quidem
              culpa voluptatem, magni labore animi perferendis adipisci quasi
              tempore molestiae maiores sunt quis voluptatibus.
            </p>
          </div>
        </div>
        <h2 className="govuk-heading-l">Facts</h2>
        <ul className="govuk-list govuk-list--bullet">
          {(await getFacts(Math.floor(Math.random() * 10))).data.map(
            (fact: { fact: string; length: number }, idx: number) => (
              <li key={idx}>{fact.fact}</li>
            )
          )}
        </ul>
      </main>
    </div>
  );
}
