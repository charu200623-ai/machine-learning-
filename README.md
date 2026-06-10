# machine-learning-
Dataset

from sklearn.datasets import load_iris
import pandas as pd

iris = load-iris()

df = pd.DataFrame(iris.data, columns=iris.feature_names)

df['flower_name'] = pd.Categorical.from_codes(iris.target,iris.target_name)

print(df['flower_name'].value_counts())

print(df.head())

print(df.tail())

print("Total flowers:", len(df))