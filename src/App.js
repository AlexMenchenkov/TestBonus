import {Block} from './components/Block/Block';
import {InfoBlock} from './components/InfoBlock/InfoBlock';
import {getAccessToken} from './redux/app/actions';
import React, {useEffect} from 'react';
import {TEXT_HEARED, SYMBOL_I} from '../src/const/ui-texts';
import {BG_RED, BG_WHITE} from '../src/const/styles';
import './App.scss';
import {props} from './App-prop';
import {useDispatch} from 'react-redux';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccessToken());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

      return (<>
          <Block
              text={TEXT_HEARED}
              symbol={SYMBOL_I}
              classStyle={BG_WHITE}
          >
          </Block>
          <Block
              classStyle={BG_RED}
          >
          </Block>
          <InfoBlock/>
      </>);
};

App.propTypes = props;
