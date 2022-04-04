import { DatePicker } from '@mui/lab';
import { Button, Card, Container, Stack, TextField, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import formState from '../atoms/formState';

const Form = () => {
  const navigate = useNavigate();

  const setForm = useSetRecoilState(formState);

  const [developer, setDeveloper] = useState('');
  const [purpose, setPurpose] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState<DateTime | null>(DateTime.now().toLocal());
  const [previousCondition, setPreviousCondition] = useState('');
  const [modification, setModification] = useState('');

  useEffect(() => {
    const savedDeveloper = localStorage.getItem('developer');
    if (savedDeveloper) {
      setDeveloper(savedDeveloper);
    }
  }, []);

  const onSubmit = () => {
    localStorage.setItem('developer', developer);
    setForm({
      developer,
      purpose,
      reason,
      date: (date ?? DateTime.now()).toLocaleString(DateTime.DATE_FULL),
      previousCondition,
      modification,
    });
    navigate('/print');
  };

  return (
    <Container sx={{ my: 8 }}>
      <Card sx={{ p: 4 }}>
        <Typography variant="h4">Monthly Report</Typography>

        <Stack mt={4} spacing={2}>
          <TextField label="Developer" value={developer} onChange={e => setDeveloper(e.target.value)} />
          <TextField label="Purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
          <TextField label="Reason" value={reason} onChange={e => setReason(e.target.value)} />
          <DatePicker label="Date" value={date} onChange={setDate} renderInput={params => <TextField {...params} />} />
          <TextField
            label="Previous Condition"
            value={previousCondition}
            onChange={e => setPreviousCondition(e.target.value)}
          />

          <Stack>
            <Typography variant="subtitle1">Modification</Typography>
            <ReactQuill
              theme="snow"
              modules={{ toolbar: toolbarOptions }}
              value={modification}
              onChange={setModification}
            />
          </Stack>

          <Button onClick={onSubmit} variant="contained">
            Submit
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block', 'image'],

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button]
];

export default Form;
