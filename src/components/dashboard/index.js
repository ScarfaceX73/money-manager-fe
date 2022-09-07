import Cards from "./cards";
import AddModal from "./add-modal";

const Dashboard = () => {

  return (
    <>
      <div className="flex h-24 items-center w-full">
        <div className="justify-start flex items-center h-12 grow">
          dashboard --- please add some data as there is no data in your account then try filter function and other functions.
        </div>
        <AddModal />
      </div>
      <Cards />
    </>
  );
};

export default Dashboard;
