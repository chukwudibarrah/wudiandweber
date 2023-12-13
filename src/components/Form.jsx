export default function Form() {
  return (
    <div>
      <form action="" className="font-sourcecode text-lg text-engviolet">
        <p>
          Hello! My name is{" "}
          <span className="appearance-none">
            <input type="text" placeholder="Name" className="border-b-4 border-engviolet/30 outline-none bg-transparent"/>
          </span>{" "}
          and I&apos;m contacting you about{" "}
          <span>
            <input type="textarea" placeholder="Details" className="border-b-4 border-engviolet/30 outline-none bg-transparent resize-y" />
          </span>
          . You can reach me via my{" "}
          <span>
            <input type="email" placeholder="Email" className="border-b-4 border-engviolet/30 outline-none bg-transparent" />
          </span>{" "}
          or call my number{" "}
          <span>
            <input type="phone" placeholder="Phone number" className="border-b-4 border-engviolet/30 outline-none bg-transparent" />
          </span>
          . Looking forward to hearing from you!
        </p>
        <div className="my-7">
          <button className="bg-cosmiclatte border-2 border-engviolet rounded-2xl px-3 hover:bg-engviolet hover:text-cosmiclatte">Send message</button>
        </div>
      </form>
    </div>
  );
}
