import san from 'san';
import { router } from 'san-router';
import app from './app.san';
import './index.css';

router.add({
  rule: '/',
  Component: app,
  target: '#app'
})

router.start()

