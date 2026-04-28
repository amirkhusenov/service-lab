import { Link } from "@tanstack/react-router";
import type { Case } from "#/lib/store.ts";

export const CaseList = ({ cases }: { cases: Case[] }) => {
  return cases.map((caseItem: Case) => (
    <Link to={"/cases/$id"} params={{ id: String(caseItem.id) }} className={"case card"} key={caseItem.id}>
      <img src={caseItem.image} className={"case__img"} alt={"case-01-image"} />
      <div className={"card__content"}>
        <h2 className={"card__title case__title"}>{caseItem.title}</h2>
        <p className={"card__description case__description"}>{caseItem.description}</p>
      </div>
      <div className={"card__bg-icon"}>
        <img src={"/assets/start/icon.svg"} alt="" />
      </div>
    </Link>
  ));
};
