import { Grid, Stack } from '@mui/material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import binusImg from '../assets/binus.png';
import formState from '../atoms/formState';
import '../styles/print.css';

const Print = () => {
  const form = useRecoilValue(formState);

  const printReport = () => print();

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <img style={{ width: 150 }} src={binusImg} alt="Binus Logo" onLoad={printReport} />
        <p>FM-BINUS-AA-FPT-319/R2</p>
      </Stack>

      <Stack alignItems="center">
        <b>Formulir Laporan Pengembangan / Perubahan Aplikasi</b>
        <i>Application Development / Modification Report Form</i>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <i>Developer</i>
        </Grid>
        <Grid item xs={9}>
          <i>: {form.developer}</i>
        </Grid>

        <Grid item xs={3}>
          <i>Purpose</i>
        </Grid>
        <Grid item xs={9}>
          <i>: {form.purpose}</i>
        </Grid>

        <Grid item xs={3}>
          <i>Reason</i>
        </Grid>
        <Grid item xs={9}>
          <i>: {form.reason}</i>
        </Grid>

        <Grid item xs={3}>
          <i>Date</i>
        </Grid>
        <Grid item xs={9}>
          <i>: {form.date}</i>
        </Grid>

        <Grid item xs={3}>
          <i>Previous Condition</i>
        </Grid>
        <Grid item xs={9}>
          <i>: {form.previousCondition}</i>
        </Grid>

        <Grid item xs={3}>
          <i>Modification</i>
        </Grid>
        <Grid item xs={9}>
          <i>:</i>
        </Grid>
        <Grid item xs={12}>
          <i dangerouslySetInnerHTML={{ __html: form.modification }}></i>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Print;
