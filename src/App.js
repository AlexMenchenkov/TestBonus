import Block from './components/Block/Block';
import InfoBlock from './components/InfoBlock/InfoBlock';
import {getAccessToken} from './redux/app/actions';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {textHeader, symbol, } from '../src/const/ui-texts';
import {backgroundWhite, backgroundRed} from '../src/const/styles';
import './App.css';
import {props} from './App-prop';

const App = ({getAccessToken}) => {

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

      return (<>
          <Block
              text={textHeader}
              symbol={symbol}
              background={backgroundWhite}
          >
          </Block>
          <Block
              background={backgroundRed}
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
