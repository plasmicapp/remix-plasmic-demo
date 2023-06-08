// This page will show up at the route /mypage

import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-react';
import { PLASMIC } from '../plasmic-init';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

// Fetch the data needed to render Plasmic pages or components, server-side.
export const loader = async () => {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData('Homepage');
  return json(plasmicData);
};

// Render the page or component from Plasmic.
export default function MyPage() {
  const plasmicData = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}