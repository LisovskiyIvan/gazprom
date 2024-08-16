
export interface DataDTO {
  article_type_name: string;
  articlebarcode: string;
  articleid: string;
  articlename: string;
  articletype: string;
  baseprice: string;
  class_path: string;
  ecological_class: string;
  ecrlongname: string;
  ecrsectionid: string;
  external_str_id: string;
  flg_disable: string;
  flg_disable_name: string;
  flgbase: string;
  has_any_bc_marking: string;
  has_mrc: string;
  isloto: string;
  preparemoment_name: string;
  rest: string;
  sectionname: string;
  sectiontype: string;
  strpath: string;
  subarticle_marking: string;
  subarticle_marking_name: string;
  subarticlebarcode: string;
  subarticleid: string;
  tag_1162: string;
  tag_1162_name: string;
  tag_1212: string;
  tax_system: string;
  unitname: string;
}

interface Props {
  data: DataDTO[]
}

export const Table = ({data}: Props) => {

 
  return (
    <>
      <table
        className="w-[100%] max-w-[1200px] border-collapse py-4 px-10   mt-[50px] bg-darkblue"
        border={1}
      >
        <thead className="rubik">
          <tr>
            <th className="p-5 text-left">Название</th>
            <th className="p-5 text-left">Цена</th>
            <th className="p-5 text-left">Статус</th>
            <th className="p-5 text-left">Компания</th>
            <th className="p-5 text-left">Количество</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((val, index) => {
              return (
                <tr key={index} className="raleway pb-4">
                  <td className="p-2 text-left max-w-[350px]">{val.articlename}</td>
                  <td className="p-2 text-left max-w-[350px]">{val.baseprice}</td>
                  <td className={`p-2 text-left max-w-[350px] ${val.flg_disable_name == 'Блокирован' ? 'bg-lightblue' : ''}`}>{val.flg_disable_name}</td>
                  <td className="p-2 text-left max-w-[350px]">{val.strpath}</td>
                  <td className="p-2 text-left max-w-[350px]">{val.unitname}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
