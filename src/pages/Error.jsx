const Error = () => {
  return (
    <section className="min-h-screen justify-center flex items-center text-5xl flex-col gap-5 font-dancingscript">
      <h1>This website made by ai</h1>
      <h3 className="flex justify-center items-center">
        Email me :{" "}
        <a href="mailto:totallynotankooo@gmail.com" className="cursor-pointer">
          <img
            src="email.svg"
            alt="email"
            width={50}
            height={50}
            title="email"
          />
        </a>
      </h3>
    </section>
  );
};

export default Error;
