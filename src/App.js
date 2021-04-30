import Block from './components/Block/Block';
import InfoBlock from './components/InfoBlock/InfoBlock';
import {getAccessToken} from './redux/app/actions';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {TEXT_HEARED, SYMBOL_I} from '../src/const/ui-texts';
import './App.scss';
import {props} from './App-prop';

const App = ({getAccessToken}) => {

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

      return (<>
          <Block
              text={TEXT_HEARED}
              symbol={SYMBOL_I}
              classStyle={'blockWhite'}
          >
          </Block>
          <Block
              classStyle={'blockRed'}
          >
          </Block>
          <InfoBlock/>
      </>);
};

App.propTypes = props;

const mapDispatchToProps = {
  getAccessToken: getAccessToken,
};

export {App};
export default connect(null, mapDispatchToProps)(App);
