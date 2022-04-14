import joblib


# model_directory = "./knn_model.pkl"
# mean = {"age":  53.323254,
#         "height" : 164.357378,
#         "weight" : 74.108527,
#         "ap_hi" : 126.226438,
#         "ap_lo" : 81.304213
#         }
# std = {
#         "age": 6.769425,
#         "height": 8.203246,
#         "weight": 14.321363,
#         "ap_hi" :  17.712276,
#         "ap_lo" : 9.835699
#         }

# Load the model from the file#knn = joblib.load(model_directory)


def predict(age, height,weight, ap_hi, ap_lo, gender = 1, cholestrol = 1,glucose = 1,smoke = 0,alco = 0,active =1):
    #dummy varaible
    model_directory = "./knn_model.pkl"
    knn = joblib.load(model_directory)  

    mean = {"age":  53.323254,
            "height" : 164.357378,
            "weight" : 74.108527,
            "ap_hi" : 126.226438,
            "ap_lo" : 81.304213
            }
    std = {
            "age": 6.769425,
            "height": 8.203246,
            "weight": 14.321363,
            "ap_hi" :  17.712276,
            "ap_lo" : 9.835699
            }

    gender_1 = 0
    gender_2 = 0
    gender_1 = 0
    gender_2 = 0
    cholestrol_1 = 0
    cholestrol_2 = 0
    cholestrol_3 = 0
    cholestrol_1 = 0
    cholestrol_2 = 0
    cholestrol_3 = 0
    cholestrol_1 = 0
    cholestrol_2 = 0
    cholestrol_3 = 0
    glucose_1 = 0
    glucose_2 = 0
    glucose_3 = 0
    glucose_1 = 0
    glucose_2 = 0
    glucose_3 = 0
    glucose_1 = 0
    glucose_2 = 0
    glucose_3 = 0
    active_0 = 0
    active_1 = 0
    active_0 = 0
    active_1 = 0
    smoke_0 = 0
    smole_1 = 0
    smoke_0 = 0
    smoke_1 = 0

    if gender == 1:
        gender_1 = 1
        gender_2 = 0
    else:
        gender_1 = 0
        gender_2 = 1
    
    if cholestrol == 1:
        cholestrol_1 = 1
        cholestrol_2 = 0
        cholestrol_3 = 0
    elif cholestrol == 2:
        cholestrol_1 = 0
        cholestrol_2 = 1
        cholestrol_3 = 0
    else:
        cholestrol_1 = 0
        cholestrol_2 = 0
        cholestrol_3 = 1
    
    if glucose == 1:
        glucose_1 = 1
        glucose_2 = 0
        glucose_3 = 0
    elif glucose == 2:
        glucose_1 = 0
        glucose_2 = 1
        glucose_3 = 0
    else:
        glucose_1 = 0
        glucose_2 = 0
        glucose_3 = 0
    
    if active == 0:
        active_0 = 1
        active_1 = 0
    else:
        active_0 = 0
        active_1 = 1
    
    if smoke == 0:
        smoke_0 = 1
        smole_1 = 0
    else:
        smoke_0 = 0
        smoke_1 = 1

    if alco == 0:
        alco_0 = 1
        alco_1 = 0
    else:
        alco_0 = 1
        alco_1 = 0
    
    std_age = ((age-mean["age"])/std["age"])
    std_height = ((height - mean["height"])/std["height"])
    std_weight = ((weight - mean["weight"])/std["weight"])
    std_ap_hi = ((ap_hi-mean["ap_hi"])/std["ap_hi"])
    std_ap_lo = ((ap_lo-mean["ap_lo"])/std["ap_lo"])
    ls = [std_age,std_height,std_weight,std_ap_hi,std_ap_lo,gender_1,gender_2,cholestrol_1,cholestrol_2,cholestrol_3,glucose_1,glucose_2,glucose_3,smoke_0,smoke_1,alco_0,alco_1,active_0,active_1]
    return knn.predict([ls])
    

 
# Use the loaded model to make predictions
#print(knn.predict(data))
#print(predict(age = 60, gender = 2,height = 168, weight = 62, ap_hi = 110, ap_lo = 110, cholestrol = 1, glucose =1,smoke = 0, alco = 0, active = 1))