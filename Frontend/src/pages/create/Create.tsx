//Import Needed Components
import { useNavigate } from 'react-router-dom';
import CreateForm from "../../components/create/CreateForm";
import { createCampaign } from '../../api/Campaign';

const Create = () => {
    const navigate = useNavigate();

    const handleSubmit = async (campaign: any) => {
        const data = { ...campaign };

        try {
            console.log(data)
            // const response = await createCampaign(data);
            // navigate(`/campaign/${response.data.id}`);
            await createCampaign(data);
            navigate(`/`);
        } catch (error) {
            console.error('Error creating campaign:', error);
        }
    };

    return ( 
        <main>
            <CreateForm onSubmit={handleSubmit} />
        </main>
     );
}
 
export default Create;