import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import { AppRoute } from '../../navigation/app-routes';
import { FormInput } from '../../components/form-input.component';
import { Toolbar } from '../../components/toolbar.component';
import { ResetPasswordData, ResetPasswordSchema } from '../../data/reset-password.model';

export const ResetPasswordScreen = (props) => {

  const insets = useSafeArea();

  const onFormSubmit = (values) => {
    navigateSignIn();
  };

  const navigateSignIn = ()=> {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props) => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        DONE
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});
