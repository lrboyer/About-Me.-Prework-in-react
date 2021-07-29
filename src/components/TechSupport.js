function TechSupport(props) {
  return (
    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div class="h-full text-center">
        <img
          alt={props.alt}
          class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={require(`../pics/${props.pic}.jpg`).default}
        />
        <br />
        <span class="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
          {" "}
          {props.name}
        </h2>
        <p class="text-gray-500">{props.location}</p>
      </div>
    </div>
  );
}

export default TechSupport;
