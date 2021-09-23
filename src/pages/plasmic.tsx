import React from "react";
import { PlasmicComponent, PlasmicRootProvider, initPlasmicLoader, } from "@plasmicapp/loader-gatsby";
import { graphql } from "gatsby";

//Statically fetch the data needed to render Plasmic pages or components.
//You can pass in multiple page paths or component names.
export const query = graphql `
	query {
		plasmicComponents(componentNames: ["NewPage"])
		plasmicOptions
	}
`;

//Render the page or component from Plasmic.
const MyPage = ({ data }) => {
	const { plasmicComponents, plasmicOptions } = data;
	return (
	  <PlasmicRootProvider
		loader={initPlasmicLoader(plasmicOptions)}
		prefetchedData={plasmicComponents}
	  >
		<PlasmicComponent component="/new-page" />
	  </PlasmicRootProvider>
	);
  };

export default MyPage;
