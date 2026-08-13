import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function TrainersPreview() {
  const featured = trainers.slice(0, 3);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x flex flex-col items-center">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Our Expert"
          highlight="Trainers"
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featured.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <Button as="a" href="/trainers" variant="outline" className="mt-12">
          View All Trainers
        </Button>
      </div>
    </section>
  );
}
