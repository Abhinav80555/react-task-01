import "./styles.css";

const Content = [
  {
    heading: "FREE",
    dollar: 0,
    specs: [
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  },

  {
    heading: "PLUS",
    dollar: 9,
    specs: [
      "5 User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  },

  {
    heading: "PRO",
    dollar: 49,
    specs: [
      "Unlimited User",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {Content.map((mv, index) => (
              <Main key={index} props={mv} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Main({ props }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.heading}
          </h5>
          <h6 className="card-price text-center">
            ${props.dollar}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.specs.map((sp, index) => {
              const conhead = props.heading;
              let text = "";
              function toCheck() {
                if (conhead === "FREE" && index > 3) text = "text-muted";
                if (conhead === "PLUS" && index > 6) text = "text-muted";
              }
              toCheck();
              let icon = `fa-solid fa-${
                text === "text-muted" ? "times" : "check"
              }`;
              return (
                <li className={text}>
                  <span className="fa-li">
                    <i className={icon}></i>
                  </span>
                  {sp}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
