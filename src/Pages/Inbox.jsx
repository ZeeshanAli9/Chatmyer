import React, { useEffect, useState } from "react";
import { inboxuser } from "../Utils/Constant";
import menudots from "../assets/chatbox/menudots.svg";
import gallery from "../assets/chatbox/gallery.png";
import archive_tick from "../assets/chatbox/archive-tick.svg";
import happyemoji from "../assets/chatbox/happyemoji.svg";
import linkSquare from "../assets/chatbox/link-square.svg";
import send from "../assets/chatbox/send.svg";
import sms_star from "../assets/chatbox/sms-star.svg";
import UserChatsTemplate from "../Components/UIElementsTemplate/UserChatsTemplate";
import { initialGenerator } from "../Utils/Helpermethods";

const Inbox = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const user = inboxuser[0];
  useEffect(() => {
    setSelectedUser(user);
  });
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const unreaduser = inboxuser.filter((user) => user.unread);
  console.log(unreaduser);

  return (
    <>
      <section>
        <div className="flex">
          {/* User Detail ? */}
          <div className="max-w-[380px]  h-[100vh] overflow-hidden border-r border-[#E8E8E8]">
            {/* Tab All unread  */}
            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 pt-4">
              <div className="flex items-center ">
                <div
                  onClick={() => setActiveTab("All")}
                  className={`py-3 px-4 text-xs font-semibold cursor-pointer transition-all duration-300 ${
                    activeTab === "All"
                      ? "text-secondary-dark border-b-[2px] border-primary-dark"
                      : "text-[#84818A] border-b-[2px] border-transparent"
                  }`}
                >
                  All
                </div>
                <div
                  onClick={() => setActiveTab("Unread")}
                  className={` relative py-3 px-4 text-xs font-semibold cursor-pointer transition-all duration-300 flex ${
                    activeTab === "Unread"
                      ? "text-secondary-dark border-b-[2px] border-primary-dark"
                      : "text-[#84818A] border-b-[2px] border-transparent"
                  }`}
                >
                  Unread{" "}
                  <span
                    className=" ml-1 bg-primary-dark text-white rounded-full h-4 w-4 font-normal text-[10px] items-center flex justify-center
                  "
                  >
                    {unreaduser.length}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="sort"
                  className="py-3 px-4 text-xs font-medium cursor-pointer text-[#84818A]"
                >
                  Sort by
                </label>
                {/* <select onChange={handleChange} id="sort">
                  <option value=""></option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                </select> */}
              </div>
            </div>
            {/* userdata  map */}
            <div
              className="overflow-y-scroll custom_scrollbar"
              style={{
                height: "calc(100vh - 118px)",
              }}
            >
              {activeTab === "All" &&
                inboxuser?.map((user) => <UserChatsTemplate user={user} />)}
              {activeTab === "Unread" &&
                inboxuser
                  ?.filter((user) => user.unread)
                  .map((user) => <UserChatsTemplate user={user} />)}
            </div>
          </div>

          {/* chatbox section */}
          <div className="w-full h-full flex flex-col">
            <div className="  border-b border-[#E8E8E8] flex items-center justify-between px-6 py-[7px]">
              <div className="flex items-center">
                {selectedUser && (
                  <>
                    <div
                      className={`relative h-10 w-10 rounded-full flex items-center justify-center border border-[#84818A] mr-3`}
                    >
                      <h1>{initialGenerator(selectedUser?.Username)}</h1>
                      {selectedUser.status === "Active" && (
                        <span className="absolute -right-1 bottom-0 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg text-secondary-dark font-medium">
                        {user.Username}
                      </h2>
                      <p
                        className={`user_message text-sm -mt-1 text-secondary-lighter `}
                      >
                        RileyCooper754@gmail.com
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div>
                <figure className="cursor-pointer">
                  <img src={menudots} alt="" />
                </figure>
              </div>
            </div>
            <div
              className="overflow-y-scroll px-6 mr-3"
              style={{ height: "calc(100vh - 248px)" }}
            >
              hjgjhjhjhhhhhhhhhhhk Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati excepturi eveniet numquam,
              consequuntur dolores atque sit molestias qui, quos similique
              repellendus voluptate expedita, doloribus accusantium eos fuga
              repellat. Animi fugit minus sunt dolorem. Quas veritatis
              recusandae culpa labore quod mollitia, quasi fugit quo animi nemo
              aliquid incidunt, et asperiores cupiditate alias adipisci corporis
              explicabo nihil quae ex distinctio. Blanditiis animi cumque,
              provident rem eligendi sapiente incidunt tenetur veniam fuga,
              nobis vero ab fugit suscipit obcaecati earum reprehenderit,
              deserunt maxime facere in sint quaerat dolorem similique? Ipsam
              cumque magni consectetur mollitia autem recusandae, tenetur
              suscipit cupiditate. Debitis necessitatibus, ad nisi illum dolores
              rem? Laudantium molestias voluptate atque consectetur beatae
              cupiditate, incidunt, natus velit, sunt quo tenetur! Saepe
              recusandae commodi itaque ipsa vitae, quia error veritatis
              blanditiis inventore asperiores quas rem eaque possimus laudantium
              tempora officia quis a odio earum sed! Hic facere neque non iusto
              perspiciatis unde sequi ab excepturi quibusdam odit, dignissimos
              modi consectetur saepe aspernatur expedita rerum velit assumenda
              voluptas culpa, officiis iure, obcaecati quo sit! Sequi dicta,
              error tenetur accusantium aliquam nulla consectetur architecto
              esse, vel atque voluptates minus repellendus cumque quo adipisci
              similique tempora quam vitae quasi alias exercitationem nesciunt?
              Animi provident facere voluptatem ratione ipsa atque illum vitae
              recusandae. Nihil sequi eum repellendus. Animi, perferendis
              corrupti culpa sequi at aut? Unde distinctio rem voluptatibus. Eum
              praesentium corrupti dolor optio molestiae nulla iste, quisquam
              vel nisi eius consequuntur earum sapiente distinctio accusantium
              nam, perspiciatis nemo rerum? Totam, consequuntur omnis dicta iure
              iusto suscipit similique minus voluptates tenetur ipsum harum quod
              itaque in. Explicabo vero maiores voluptate harum repellendus
              labore quibusdam voluptatum omnis provident, saepe hic ad nisi
              neque dicta sequi repudiandae quod. Praesentium, distinctio ab
              officiis reprehenderit assumenda sapiente nesciunt eveniet nam
              corporis quisquam minus officia hic dolorum enim sed, commodi
              sequi quae fugiat, repellat nostrum reiciendis quia doloribus?
              Officia nostrum quia ullam reiciendis praesentium vero quis eum
              est assumenda minus! Exercitationem quam voluptatem dolore animi.
              Similique, consequuntur natus rerum beatae quasi inventore nulla.
              Doloribus adipisci error sed aperiam magnam quam quia non, ducimus
              voluptatem autem sit dicta laudantium nihil est asperiores esse
              molestias rem natus! Nesciunt pariatur, minima repellat quis
              consequuntur maiores adipisci nemo dicta praesentium veniam
              voluptas consectetur. Debitis hic perferendis cupiditate explicabo
              deleniti ipsa itaque consectetur necessitatibus nostrum veritatis,
              fuga iure est expedita? Quibusdam sunt cupiditate doloribus error,
              amet earum asperiores enim sit, ea eaque voluptatibus corporis
              animi laborum dolorem rerum? Placeat ea veniam soluta veritatis
              facilis eaque odio iure? Nostrum, corrupti, tenetur facilis a
              neque inventore cumque magnam ab corporis, voluptates excepturi
              nihil! Beatae id minima natus nesciunt porro vel, doloribus
              doloremque recusandae. Aspernatur assumenda nisi tenetur
              voluptates quis quam optio minus facere porro dolorum autem labore
              nemo, quisquam illum corporis? Veniam ipsa ea, voluptas
              accusantium soluta aspernatur. Accusantium ab iusto assumenda aut
              nesciunt minima natus corrupti, incidunt quas quaerat quam,
              tempore aliquam nisi cupiditate ad doloribus! Illum, perferendis,
              quo, repudiandae sapiente voluptatibus modi eum dolorum tempora
              optio accusantium fugit doloremque atque? Praesentium enim
              excepturi minima esse nam quia. Reprehenderit dolore dignissimos
              autem et, alias facere magnam neque iusto impedit cupiditate.
              Porro vero debitis, quibusdam quia in consequuntur reprehenderit
              non mollitia fugit, quas maxime et animi explicabo expedita
              excepturi delectus? Ullam dolor quasi accusamus voluptatum optio
              error odio ipsam ipsum natus exercitationem, commodi aspernatur
              soluta eligendi eum. Autem cum doloribus, atque praesentium ut
              ipsum recusandae in debitis. Dolor esse omnis harum adipisci
              doloribus sapiente ut ullam dicta? Temporibus quidem magni
              reiciendis asperiores, reprehenderit nostrum laudantium suscipit,
              veritatis accusantium maxime natus, commodi architecto? Delectus
              atque iste velit molestias quidem inventore consequuntur dicta
              voluptatem ullam voluptas recusandae, eligendi minima veniam vero
              tempore modi distinctio dolorum alias in iure voluptatibus
              perferendis suscipit? Excepturi ipsam, ex fugiat voluptatem
              aliquid reiciendis harum, dolor veniam, odio dolorem blanditiis
              sapiente sit exercitationem eum vero provident eaque totam ut
              expedita? Minima numquam in blanditiis itaque aliquam minus odit
              laboriosam cum iste. Dolorem qui officiis eaque repellendus quod
              dolorum sunt tempora unde recusandae, quibusdam est saepe
              blanditiis mollitia pariatur ipsa ullam nobis voluptate non,
              delectus totam. Deserunt itaque est reiciendis cupiditate,
              sapiente dolores inventore nisi ducimus magnam numquam quam
              laudantium possimus et obcaecati amet perferendis accusamus omnis.
              Autem, expedita et! Numquam voluptatem aut omnis repudiandae
              inventore eaque dolorum ipsa officiis voluptate. Iste maiores
              recusandae ullam excepturi porro voluptatum odio quisquam
              temporibus placeat tempora, perferendis blanditiis necessitatibus
              minima est deserunt nemo ipsam qui animi eius error neque iure
              atque. Accusantium est, ducimus voluptatum, sapiente praesentium
              maiores, itaque error accusamus officiis distinctio consectetur
              quibusdam omnis ut iste temporibus. Unde quisquam consequatur
              iste? Molestiae quae qui doloremque quia, voluptatum magnam
              placeat vero quisquam rerum tenetur pariatur? Cum facilis vitae
              temporibus quo, neque rerum commodi cupiditate? Cumque eligendi
              quia corrupti eius ducimus doloribus quas nam officiis
              exercitationem aliquam molestias maiores, ipsum sapiente eum
              aspernatur, iure odit. Tempora consequuntur hic dolores
              perspiciatis qui, unde, repudiandae dicta nemo corporis impedit
              mollitia! Necessitatibus unde atque fuga distinctio exercitationem
              inventore autem voluptates cumque eum ipsum, debitis velit
              molestiae expedita consequatur quisquam perferendis iste
              repudiandae iusto, deleniti asperiores. Nostrum reiciendis aut
              reprehenderit quaerat, impedit, totam cum numquam itaque placeat
              quos minima. Distinctio omnis placeat tempora perspiciatis rem
              voluptates maiores quas id nemo assumenda dolor est minus
              temporibus, enim in mollitia fugiat similique velit reprehenderit
              cum, esse error laborum commodi. Cumque doloremque enim,
              blanditiis nobis voluptatum architecto doloribus placeat, sunt ab
              iusto porro temporibus rerum accusantium laborum dolore laboriosam
              officiis. Eos quam ipsum sequi eum veniam quod vero suscipit qui
              ratione rem cupiditate voluptates ad deleniti dolor temporibus
              nihil alias eaque architecto fuga, a in provident? Ipsa eligendi
              aspernatur perspiciatis. Voluptates ipsum, fugiat dolorum aperiam
              aliquam, sunt fuga voluptatibus vel eum optio esse. Modi quo eum
              pariatur ab maiores? Tempora, libero repellendus expedita placeat
              nesciunt dolores accusantium consequatur ut delectus officiis quia
              mollitia provident porro, iure dolor, voluptatem autem molestias
              pariatur cum corrupti. Recusandae aliquid aspernatur dolorem error
              excepturi fugit natus expedita ullam rerum velit quis, magnam
              possimus magni numquam nostrum sunt accusamus explicabo. Quod
              autem deleniti ipsum placeat, id consectetur, non eligendi aperiam
              aut ea aspernatur optio dolorem? Beatae, magni commodi.
            </div>
            <div className=" h-[130px] border-t border-[#E8E8E8] px-6">
              <div className="py-2">
                <textarea
                  name=""
                  id=""
                  className="w-full outline-none text-secondary-dark placeholder:text-secondary-light text-sm font-medium  h-[60px] resize-none"
                  placeholder="Write reply here..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className="flex gap-4">
                  <figure className="cursor-pointer">
                    <img src={happyemoji} alt="" />
                  </figure>
                  <figure className="cursor-pointer">
                    <img src={gallery} alt="" />
                  </figure>
                  <figure className="cursor-pointer">
                    <img src={linkSquare} alt="" />
                  </figure>
                  <figure className="cursor-pointer">
                    <img src={archive_tick} alt="" />
                  </figure>
                  <figure className="cursor-pointer">
                    <img src={sms_star} alt="" />
                  </figure>
                </div>
                <div>
                  <button className="flex items-center justify-center bg-primary-dark rounded-[4px] text-white shadow px-2 py-1">
                    Send
                    <span className="ml-1">
                      <img src={send} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inbox;
