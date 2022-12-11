export default function Home() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/canvas-example",
      permanent: false,
    },
  };
}
