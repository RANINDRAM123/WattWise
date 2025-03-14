import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

env.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/recommendations', async (req, res) => {
    try {
        const { appliances } = req.body;
        
        const prompt = `Here is a list of appliances with their power usage and duration:
        ${appliances.map(appliance => `- ${appliance.name}: ${appliance.watts}W for ${appliance.hoursPerDay} hours per day`).join('\n')}
        
        Based on this data, provide 5 specific and actionable energy-saving recommendations.`;
        
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4',
            messages: [{ role: 'system', content: 'You are an energy efficiency expert.' }, { role: 'user', content: prompt }],
            max_tokens: 100,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        
        const recommendations = response.data.choices[0].message.content.split('\n').filter(line => line.trim() !== '');
        res.json({ recommendations });
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ error: 'Failed to fetch recommendations' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
