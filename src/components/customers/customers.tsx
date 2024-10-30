import Division from "../division/division";
import CustomersItem from "./customers-item";
import img from "../../assets/customers/customer.jpg";

function Customers() {
  return (
    <div className="w-screen">
      <Division title="Oliva Metal" sub="Custumers"></Division>
      <div className="flex justify-center items-center gap-8">
        <CustomersItem
          img={img}
          name="Cliente 1"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem incidunt magni, cumque blanditiis dignissimos rem id libero autem quos maxime distinctio perferendis nesciunt placeat provident, mollitia et in laboriosam architecto? "
          initialRating=""
        ></CustomersItem>
        <CustomersItem
          img={img}
          name="Cliente 2"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem incidunt magni, cumque blanditiis dignissimos rem id libero autem quos maxime distinctio perferendis nesciunt placeat provident, mollitia et in laboriosam architecto?"
          initialRating=""
        ></CustomersItem>
        <CustomersItem
          img={img}
          name="Cliente 3"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem incidunt magni, cumque blanditiis dignissimos rem id libero autem quos maxime distinctio perferendis nesciunt placeat provident, mollitia et in laboriosam architecto?"
          initialRating=""
        ></CustomersItem>
      </div>
    </div>
  );
}

export default Customers;
