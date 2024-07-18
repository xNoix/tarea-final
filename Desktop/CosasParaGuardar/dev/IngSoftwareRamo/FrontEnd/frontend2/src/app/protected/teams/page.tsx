import TeamRow from "./TeamRow";

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <TeamRow
          nombre="amarillo"
          velocidad={22}
          longevidad={2}
          integrantes={[
            { src: "/user1.jpg", alt: "foto usuario 1" },
            { src: "/user2.jpg", alt: "foto usuario 2" },
          ]}
        />
        <TeamRow
          nombre="amarillo"
          velocidad={22}
          longevidad={2}
          integrantes={[
            { src: "/user1.jpg", alt: "foto usuario 1" },
            { src: "/user2.jpg", alt: "foto usuario 2" },
          ]}
        />
      </div>
    </>
  );
}
