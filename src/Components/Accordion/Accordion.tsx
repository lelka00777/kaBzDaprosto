export type PropsTypeAccordion = {
  titleValue: string;
  colapsed: boolean;
  table: number[];
  
};

export function Accordion(props: PropsTypeAccordion) {

  if (props.colapsed === true) {
    return (
      <div>
        <AcordionTitle title={props.titleValue} />
        <AcordionBody titles={props.table} />
      </div>
    );
  } else {
    return (
      <div>
        <AcordionTitle title={props.titleValue} />
      </div>
    );
  }
}

type PropsTypeAcordionTitle = {
  title: string;
};

function AcordionTitle(props: PropsTypeAcordionTitle) {
  console.log("=>  AcordionTitle render");
  return <h3>{props.title}</h3>;
}
type PropsTypeAccordionBody = {
  titles: number[];
};

function AcordionBody(props: PropsTypeAccordionBody) {
  console.log("AcordionBody render");
  return (
    <ul>
      <li>{props.titles}</li>
    </ul>
  );

  //     }
  //      else {
  //       <h3>{props.title}</h3>
}
